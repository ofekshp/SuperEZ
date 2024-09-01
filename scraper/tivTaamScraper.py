import asyncio
import urllib
from urllib.parse import quote
from playwright.async_api import async_playwright, TimeoutError
import logging
import json
import sys
import traceback

# Ensure proper encoding for input/output
sys.stdin.reconfigure(encoding='utf-8')
sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


class TivTaamScraper:
    def __init__(self, products, client_info):
        self.products = products
        self.client_info = client_info
        self.url = "https://www.tivtaam.co.il"

    async def run(self):
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=False)
            context = await browser.new_context()
            page = await context.new_page()
            try:
                await self.navigate_to_supermarket(page)
                await self.fill_cart(page)
                final_url = page.url
                logger.info(f"Final URL: {final_url}")
                return final_url
            except Exception as e:
                logger.error(f"An error occurred during scraping: {str(e)}")
                logger.error(traceback.format_exc())
                return None
            finally:
                await browser.close()

    async def navigate_to_supermarket(self, page):
        try:
            logger.info(f"Navigating to {self.url}")
            await page.goto(self.url, timeout=60000)
            logger.info("Successfully navigated to Tiv Taam")
        except TimeoutError:
            logger.error("Timeout while navigating to Tiv Taam website")
            raise
        except Exception as e:
            logger.error(f"Error navigating to Tiv Taam: {str(e)}")
            raise

    async def fill_cart(self, page):
        logger.info(f"Starting to fill cart with {len(self.products)} products")
        for index, product in enumerate(self.products, start=1):
            logger.info(f"Processing product {index} of {len(self.products)}: {product['name']}")
            await self.search_and_add_product(page, product)
            logger.info(f"Finished processing product {index} of {len(self.products)}: {product['name']}")
        logger.info("Finished adding all products to cart")
        await self.go_to_cart(page)

    async def search_and_add_product(self, page, product, max_retries=1):
        try:
            logger.info(f"Searching for product: {product['name']}")
            search_info = product['name']
            encoded_search = urllib.parse.quote(search_info)

            search_url = f"{self.url}/search/{encoded_search}"
            logger.info(f"Navigating to search URL: {search_url}")

            await page.goto(search_url, timeout=60000)

            # Wait for the product items to load
            await page.wait_for_selector('.product-item', state='visible', timeout=30000)

            # Use the correct selectors for Tiv Taam website
            product_selector = f'.name:text-is("{product["name"]}")'
            logger.info(f"Looking for product with selector: {product_selector}")
            product_element = await page.query_selector(product_selector)

            if product_element:
                logger.info(f"Found matching product for {product['name']}")

                # Click on the product name to open the modal
                await product_element.click()
                logger.info(f"Clicked on product name for {product['name']}")

                # Wait for the product modal to appear
                await page.wait_for_selector('.dialog-body.default-text-align', state="visible", timeout=10000)

                try:
                    menu = await page.wait_for_selector('.product-property', state='visible', timeout=5000)
                    # Select the first option
                    if menu:
                        await menu.click()
                        first_option = await page.wait_for_selector(
                            '.sp-dropdown-options-wrapper .sp-option:first-child', state='visible', timeout=5000)
                        if first_option:
                            await first_option.click()
                            logger.info("Selected the first option from the dropdown")
                except Exception as e:
                    logger.info("Couldn't find a source country choosing menu")
                    logger.info(e)

                # Find the add to cart button in the modal
                add_to_cart_button = await page.wait_for_selector(
                    ".dialog-body.default-text-align .product-data .add-to-cart", state="visible", timeout=10000)
                if add_to_cart_button:
                    quantity = product.get('quantity', 1)
                    logger.info(f"Clicking 'Add to Cart' button {quantity} times for {product['name']}")
                    await add_to_cart_button.click()
                    logger.info(f"Added 1 x {product['name']} to cart")

                    if quantity > 1:
                        plus_button = await page.wait_for_selector(
                            '.dialog-body.default-text-align .product-data button.plus', state="visible", timeout=5000)
                        if plus_button:
                            for _ in range(quantity - 1):  # -1 because we've already added one
                                await plus_button.click()
                                await asyncio.sleep(0.2)  # Short delay between clicks
                            logger.info(f"Added {quantity} x {product['name']} to cart")
                        else:
                            logger.warning(f"Could not find plus button for {product['name']}")

                    # Close the modal
                    close_button = await page.query_selector('.dialog-body.default-text-align button.back-button')
                    if close_button:
                        await close_button.click()
                        logger.info("Closed product modal")

                        try:
                            # Check if delivery modal appears (for first product)
                            delivery_modal = await page.wait_for_selector('.dialog-body.default-text-align',
                                                                          state='visible', timeout=5000)
                            if delivery_modal:
                                city_input = await page.wait_for_selector(
                                    '.dialog-body.default-text-align .input-and-submit #filter-areas-input',
                                    state='visible', timeout=3000)
                                city = self.client_info["city"]
                                if city_input:
                                    await city_input.fill(city)
                                    await asyncio.sleep(1)
                                    await page.keyboard.press('Enter')
                                    logger.info(f"Added location: {city}")

                                    continue_button = await page.wait_for_selector(
                                        '.dialog-body.default-text-align #continue_shopping_btn', state='visible',
                                        timeout=5000)
                                    if continue_button:
                                        await continue_button.click()
                                        logger.info("Clicked 'Continue Shopping' button")
                        except TimeoutError:
                            logger.info("No delivery modal appeared (not first product)")

                        await asyncio.sleep(3)
                else:
                    logger.warning(f"Could not find 'Add to Cart' button for {product['name']} in the modal")
            else:
                logger.warning(f"Could not find exact match for product: {product['name']}")

        except TimeoutError as e:
            logger.error(f"Timeout while processing {product['name']}")
            logger.error(e)
            logger.error(traceback.format_exc())
        except Exception as e:
            logger.error(f"Error processing {product['name']}: {str(e)}")
            logger.error(traceback.format_exc())

        # If we've reached this point, all attempts failed
        logger.error(f"Failed to add {product['name']} to cart after {max_retries} attempts")

    async def go_to_cart(self, page):
        try:
            logger.info("Navigating to cart page")
            cart_url = "https://www.tivtaam.co.il"
            await page.goto(cart_url, wait_until="networkidle", timeout=30000)
            logger.info("Successfully navigated to cart page")
        except Exception as e:
            logger.error(f"Error navigating to cart page: {str(e)}")
            raise


async def main():
    logger.info("Starting Tiv Taam scraper")

    try:
        input_data = sys.stdin.read()
        logger.debug(f"Received input data: {input_data}")

        parsed_data = json.loads(input_data)
        products = parsed_data["products"]
        client_info = parsed_data["clientInfo"]

        scraper = TivTaamScraper(products, client_info)
        final_url = await scraper.run()

        if final_url:
            print(json.dumps({"finalUrl": final_url}, ensure_ascii=False))
        else:
            print(json.dumps({"error": "Scraping failed"}, ensure_ascii=False))
    except json.JSONDecodeError:
        logger.error("Invalid JSON input")
        print(json.dumps({"error": "Invalid JSON input"}, ensure_ascii=False))
    except Exception as e:
        logger.error(f"An unexpected error occurred: {str(e)}")
        logger.error(traceback.format_exc())
        print(json.dumps({"error": str(e)}, ensure_ascii=False))


if __name__ == "__main__":
    asyncio.run(main())