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

class HatziHinamScraper:
    def __init__(self, products, client_info):
        self.products = products
        self.client_info = client_info
        self.url = "https://shop.hazi-hinam.co.il"

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
            await page.goto(self.url, timeout=60000, wait_until="networkidle")
            await self.wait_for_loader(page)
            logger.info("Successfully navigated to Hatzi Hinam")
        except TimeoutError:
            logger.error("Timeout while navigating to Hatzi Hinam website")
            raise
        except Exception as e:
            logger.error(f"Error navigating to Hatzi Hinam: {str(e)}")
            raise

    async def wait_for_loader(self, page):
        try:
            await page.wait_for_selector('.full-page-loader', state='hidden', timeout=10000)
        except TimeoutError:
            logger.warning("Loader did not disappear within the expected time")

    async def fill_cart(self, page):
        logger.info(f"Starting to fill cart with {len(self.products)} products")
        for index, product in enumerate(self.products, start=1):
            logger.info(f"Processing product {index} of {len(self.products)}: {product['name']}")
            await self.search_and_add_product(page, product)
            logger.info(f"Finished processing product {index} of {len(self.products)}: {product['name']}")
        logger.info("Finished adding all products to cart")
        await self.go_to_cart(page)

    async def search_and_add_product(self, page, product):
        try:
            logger.info(f"Searching for product: {product['name']}")
            encoded_search = urllib.parse.quote(product['name'])
            search_url = f"{self.url}/searchResults/{encoded_search}"
            logger.info(f"Navigating to search URL: {search_url}")

            await page.goto(search_url, timeout=60000)
            await self.wait_for_loader(page)

            product_selector = f'.product_streap-info h4:text-is("{product["name"]}")'
            logger.info(f"Looking for product with selector: {product_selector}")
            product_element = await page.wait_for_selector(product_selector, state='visible', timeout=10000)

            if product_element:
                logger.info(f"Found matching product for {product['name']}")
                add_to_cart_button = await page.query_selector('.product_cube-add')
                if add_to_cart_button:
                    await add_to_cart_button.click()
                    logger.info(f"Clicked 'Add to Cart' button for {product['name']}")

                    # Handle delivery modal
                    try:
                        # Enter the city name
                        city_input = await page.query_selector('.ng-input input[type=text]')
                        await city_input.click()
                        logger.info(city_input)
                        logger.info(self.client_info['city'])
                        await asyncio.sleep(0.5)
                        await city_input.fill(self.client_info['city'])
                        await asyncio.sleep(0.5)
                        await page.keyboard.press('Enter')
                        await asyncio.sleep(0.5)

                        # Click the submit button
                        submit_button = await page.query_selector('button.submit')
                        logger.info("submit_button")
                        await submit_button.click()

                        # Wait for and click the policy approval checkbox
                        policy_checkbox = await page.wait_for_selector('.rc-form-checkbox-input',
                                                                       state='visible', timeout=10000)
                        await policy_checkbox.click()
                        await asyncio.sleep(0.5)

                        # Click the "Let's start" button
                        start_button = await page.wait_for_selector('button.gray-btn', state='visible',
                                                                    timeout=10000)
                        await start_button.click()

                        logger.info("Successfully handled delivery modal")
                    except TimeoutError:
                        logger.error("Timeout while handling delivery modal")
                    except Exception as e:
                        logger.error(f"Error handling delivery modal: {str(e)}")

                    # Handle additional clicks if needed
                    quantity = product.get('quantity', 1)
                    if quantity > 1:
                        for _ in range(quantity - 1):
                            await add_to_cart_button.click()
                            await asyncio.sleep(1)
                        logger.info(f"Added {quantity} x {product['name']} to cart")
                else:
                    logger.warning(f"Could not find 'Add to Cart' button for {product['name']}")
            else:
                logger.warning(f"Could not find exact match for product: {product['name']}")

        except TimeoutError as e:
            logger.error(f"Timeout while processing {product['name']}")
            logger.error(e)
        except Exception as e:
            logger.error(f"Error processing {product['name']}: {str(e)}")
            logger.error(traceback.format_exc())

    async def go_to_cart(self, page):
        try:
            logger.info("Navigating to cart page")
            cart_url = "https://shop.hazi-hinam.co.il/checkout/cart"
            await page.goto(cart_url, wait_until="networkidle", timeout=30000)
            logger.info("Successfully navigated to cart page")
            await asyncio.sleep(12)


        except Exception as e:
            logger.error(f"Error navigating to cart page: {str(e)}")
            raise


async def main():
    logger.info("Starting Hatzi Hinam scraper")

    try:
        input_data = sys.stdin.read()
        logger.debug(f"Received input data: {input_data}")

        parsed_data = json.loads(input_data)
        products = parsed_data["products"]
        client_info = parsed_data["clientInfo"]

        scraper = HatziHinamScraper(products, client_info)
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