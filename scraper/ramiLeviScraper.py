import asyncio
import urllib
from urllib.parse import quote
from playwright.async_api import async_playwright, TimeoutError
import logging
import json
import sys
import traceback
import debugpy

# Ensure proper encoding for input/output
sys.stdin.reconfigure(encoding='utf-8')
sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class RamiLeviScraper:
    def __init__(self, products, client_info):
        self.products = products
        self.client_info = client_info
        self.url = "https://www.rami-levy.co.il"

    async def run(self):
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=False)
            context = await browser.new_context(
                viewport={"width": 1920, "height": 1080},
                user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            )
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
            await page.goto(self.url, timeout=60000, wait_until="domcontentloaded")
            logger.info("Successfully navigated to Rami Levi")
            await self.log_page_html(page, "Initial page load")
        except TimeoutError:
            logger.error("Timeout while navigating to Rami Levi website")
            raise
        except Exception as e:
            logger.error(f"Error navigating to Rami Levi: {str(e)}")
            raise

    async def fill_cart(self, page):
        logger.info(f"Starting to fill cart with {len(self.products)} products")
        for index, product in enumerate(self.products, start=1):
            logger.info(f"Processing product {index} of {len(self.products)}: {product['name']}")
            await self.search_and_add_product(page, product)
            logger.info(f"Finished processing product {index} of {len(self.products)}: {product['name']}")
            # await self.refresh_page(page)
            # await asyncio.sleep(2)  # Wait a bit between products
        logger.info("Finished adding all products to cart")
        await self.go_to_cart(page)

    async def search_and_add_product(self, page, product):
        try:
            logger.info(f"Searching for product: {product['name']} ")
            search_info = product['name']

            try:
                decoded_search = search_info.encode('iso-8859-8').decode('iso-8859-8')
            except UnicodeEncodeError:
                decoded_search = search_info
            encoded_search = urllib.parse.quote(decoded_search.encode('utf-8'))

            search_url = f"https://www.rami-levy.co.il/he/online/search?q={encoded_search}"
            logger.info(f"Navigating to search URL: {search_url}")

            try:
                logger.info(f"attempting navigation to {search_url}.")
                await page.goto(search_url, timeout=60000)
            except TimeoutError:
                logger.warning(f"Navigation timeout (URL: {search_url}).")

            await self.log_page_html(page, f"Search results for {product['name']}")

            logger.info("Waiting for search results")
            await page.wait_for_selector(".product-flex", state="visible", timeout=30000)

            product_selector = f'.product-flex:has(.inner-text:text-is("{product["name"]}"))'
            logger.info(f"Looking for product with selector: {product_selector}")
            product_element = await page.query_selector(product_selector)

            if product_element:
                logger.info(f"Found matching product for {product['name']}")
                await product_element.click()
                logger.info("Successfully clicked element")

                logger.info("Waiting for product modal")
                modal_selector = '.main-product'
                await page.wait_for_selector(modal_selector, state="visible", timeout=10000)

                add_button_selector = '.focus-item.btn-acc'
                add_button = await page.wait_for_selector(add_button_selector, state="visible", timeout=10000)
                if add_button:
                    quantity = product.get('quantity', 1)
                    logger.info(f"Clicking 'Add to Cart' button {quantity} times for {product['name']}")
                    for quantity_index in range(quantity):
                        await add_button.click()
                        if quantity_index == 0:
                            close_modal = await page.wait_for_selector('.modal-content.delivery-modal .modal-body #close-popup',
                                                                       state="visible", timeout=10000)
                            await close_modal.click()
                            logger.info("close delivery modal")
                            await asyncio.sleep(0.5)

                        await asyncio.sleep(0.5)  # Short delay between clicks to ensure they're registered

                    logger.info(f"Added {quantity} x {product['name']} to cart")

                    # Check if the product was actually added to the cart
                    cart_count = await page.query_selector('.cart-count')
                    if cart_count:
                        count_text = await cart_count.inner_text()
                        logger.info(f"Current cart count: {count_text}")
                    else:
                        logger.warning("Could not find cart count element")

                    logger.info(f"Successfully added {product['name']} to cart")
                    return  # Exit the function after successfully adding the product
                else:
                    logger.warning(f"Could not find 'Add to Cart' button for {product['name']}")
            else:
                logger.warning(f"Could not find exact match for product: {product['name']}")

        except TimeoutError as e:
            logger.error(f"Timeout while processing {product['name']} ")
            logger.error(e)
            logger.error(traceback.format_exc())
        except Exception as e:
            logger.error(f"Error processing {product['name']}: {str(e)} ")
            logger.error(traceback.format_exc())

        # If we've reached this point, all attempts failed
        logger.error(f"Failed to add {product['name']} ")

    async def go_to_cart(self, page):
        try:
            logger.info("Navigating to cart page")
            cart_url = "https://www.rami-levy.co.il/he/"
            await page.goto(cart_url, wait_until="networkidle", timeout=30000)
            logger.info("Successfully navigated to cart page")

            await self.log_page_html(page, "Cart page")
        except Exception as e:
            logger.error(f"Error navigating to cart page: {str(e)}")
            raise

    async def log_page_html(self, page, description):
        try:
            html_content = await page.content()
            logger.info(f"HTML content for {description}:\n{html_content[:500]}...")  # Log first 500 characters
        except Exception as e:
            logger.error(f"Error logging HTML content: {str(e)}")

async def main():
    logger.info("Starting Rami Levi scraper")

    try:
        input_data = sys.stdin.read()
        logger.debug(f"Received input data: {input_data}")

        parsed_data = json.loads(input_data)
        products = parsed_data["products"]
        client_info = parsed_data["clientInfo"]

        scraper = RamiLeviScraper(products, client_info)
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