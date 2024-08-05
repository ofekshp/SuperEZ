import requests
from bs4 import BeautifulSoup
import pymongo
from datetime import datetime
import time
import random
import logging
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from urllib.parse import urljoin

# Configuration
MONGODB_URI = "mongodb+srv://superezproject:ofoYnDHYWorlj2Pf@superez.v5ab25m.mongodb.net/"
DATABASE_NAME = "super_ez"
COLLECTION_NAME = "products"
CHROMEDRIVER_PATH = r"C:/Users/mayag/.wdm\drivers/chromedriver/win64/127.0.6533.72/chromedriver-win32/chromedriver.exe"  # Update this path

USER_AGENTS = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0'
]

SUPERMARKETS = [
    # {
    #     "name": "רמי לוי",
    #     "id": "rami_levi",
    #     "url": "https://www.rami-levy.co.il/he/online/market",
    #     "selectors": {
    #         "category": ".category-item", # TODO: Categories is Ramy Levy aren't being found yet. This is how you select the category element
    #         "product": ".product-flex", # This is how you select the product item element
    #         "name": ".online-product-name", # This is how you select the name element FOUND INSIDE THE PRODUCT ITEM ELEMENT
    #         "price": ".currency"# This is how you select the name element FOUND INSIDE THE PRODUCT ITEM ELEMENT
    #     }
    # },
    # {
    #     "name": "שופרסל",
    #     "id": "shufersal",
    #     "url": "https://www.shufersal.co.il/online/he/A",
    #     "selectors": {
    #         "category": ".miglog-cat",
    #         "product": ".miglog-prod",
    #         "name": ".text",
    #         "price": ".number"
    #     }
    # },
    {
        "name": "ויקטורי",
        "id": "viktory",
        "url": "https://www.victoryonline.co.il/",
        "selectors": {
            "category": ".category-menu-item",
            "product": "sp-product",
            "name": ".name",
            "price": ".price"
        }
    },
    {
        "name": "חצי חינם",
        "id": "hatzi_hinam",
        "url": "https://shop.hazi-hinam.co.il/catalog",
        "selectors": {
            "category": "catalog",
            "product": ".product-info[role='link']",
            "name": ".title",
            "price": ".price-regular"
        }
    },
    {
        "name": "יינות ביתן",
        "id": "ybitan",
        "url": "https://www.ybitan.co.il/",
        "selectors": {
            "category": ".category-item",
            "product": "sp-product",
            "name": ".name",
            "price": ".sp-product-price"
        }
    },
    {
        "id": "tiv_taam",
        "name": "טיב טעם",
        "url": "https://www.tivtaam.co.il/categories/90066/products",
        "selectors": {
            "category": ".category-item",
            "product": ".product-item",
            "name": ".name",
            "price": ".product-price"
        }
    }
]

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

class Database:
    def __init__(self):
        self.client = None
        self.db = None
        self.collection = None

    def connect(self):
        try:
            self.client = pymongo.MongoClient(MONGODB_URI, serverSelectionTimeoutMS=5000)
            self.client.server_info()
            self.db = self.client[DATABASE_NAME]
            self.collection = self.db[COLLECTION_NAME]
            logging.info("Successfully connected to MongoDB")
        except pymongo.errors.ServerSelectionTimeoutError as err:
            logging.error(f"Failed to connect to MongoDB: {err}")
            raise

    def update_product(self, name, supermarket, price):
        self.collection.update_one(
            {"name": name},
            {"$set": {
                f"prices.{supermarket}": price,
                "updatedAt": datetime.now()
            }},
            upsert=True
        )

    def close(self):
        if self.client:
            self.client.close()

class Scraper:
    def __init__(self):
        self.db = Database()
        self.db.connect()
        self.driver = self.setup_driver()

    def setup_driver(self):
        chrome_options = Options()
        chrome_options.add_argument("--headless")
        chrome_options.add_argument("--disable-gpu")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-service-workers")
        chrome_options.add_argument("--disable-web-security")
        chrome_options.add_argument("--disable-site-isolation-trials")
        chrome_options.add_argument(f"user-agent={self.get_random_user_agent()}")
        service = Service(CHROMEDRIVER_PATH)
        driver = webdriver.Chrome(service=service, options=chrome_options)
    
        def interceptor(request):
            if request.url.endswith('sw.js'):
                request.abort()
        
        driver.request_interceptor = interceptor
        
        return driver

    def get_random_user_agent(self):
        return random.choice(USER_AGENTS)

    def get_page_content(self, url, superMarketId):
        try:
            self.driver.get(url)

            # Wait until Hatzi Hinam's loader disappears from the page.
            if superMarketId == "hatzi_hinam":
                (WebDriverWait(self.driver, 10)
                 .until(EC.invisibility_of_element_located((By.CSS_SELECTOR, ".full-page-loader"))))

            if superMarketId == "tiv_taam":
                ((WebDriverWait(self.driver, 10))
                 .until(EC.presence_of_element_located((By.CSS_SELECTOR, ".product-item"))))

            if superMarketId == "viktory":
                ((WebDriverWait(self.driver, 10))
                 .until(EC.presence_of_element_located((By.CSS_SELECTOR, ".item"))))

            WebDriverWait(self.driver, 20).until(EC.presence_of_element_located((By.TAG_NAME, "body")))
            return self.driver.page_source
        except Exception as e:
            logging.error(f"Error fetching {url}: {e}")
            return None

    def scrape_category(self, supermarket, category_url):
        logging.info(f"Scraping category: {category_url}")
        content = self.get_page_content(category_url, supermarket['id'])
        if not content:
            return

        soup = BeautifulSoup(content, 'html.parser')
        products = soup.select(supermarket['selectors']['product'])
        
        for product in products:
            try:
                name_elem = product.select_one(supermarket['selectors']['name'])
                price_elem = product.select_one(supermarket['selectors']['price'])
                
                if not name_elem or not price_elem:
                    logging.warning(f"Missing name or price element for a product in {supermarket['name']}")
                    continue

                name = name_elem.text.strip()
                price_text = price_elem.text.strip()
                price = float(''.join(filter(str.isdigit, price_text))) / 100  # Assuming price is in agorot
                
                logging.info(f"Parsed product: Name: {name}, Price: {price}")
                
                self.db.update_product(name, supermarket['name'], price)
                logging.info(f"Updated price for {name} in {supermarket['name']}: ₪{price:.2f}")
            except Exception as e:
                logging.error(f"Error parsing product in {supermarket['name']}: {e}")

    def scrape_prices(self):
        for supermarket in SUPERMARKETS:
            logging.info(f"Scraping {supermarket['name']}...")
            
            content = self.get_page_content(supermarket['url'], supermarket['id'])
            if not content:
                continue

            soup = BeautifulSoup(content, 'html.parser')
            categories = soup.select(supermarket['selectors']['category'])
            
            if not categories:
                logging.warning(f"No categories found on {supermarket['url']}. Attempting to scrape products directly.")
                self.scrape_category(supermarket, supermarket['url'])
            else:
                for category in categories:
                    category_url = category.get('href')
                    if category_url:
                        if not category_url.startswith('http'):
                            category_url = urljoin(supermarket['url'], category_url)
                        self.scrape_category(supermarket, category_url)
                    time.sleep(random.uniform(1, 3))  # Random delay between category requests
            
            logging.info(f"Finished scraping {supermarket['name']}")
            time.sleep(random.uniform(5, 10))  # Random delay between supermarkets

    def close(self):
        self.db.close()
        if self.driver:
            self.driver.quit()

def main():
    scraper = Scraper()
    try:
        scraper.scrape_prices()
    finally:
        scraper.close()

if __name__ == "__main__":
    main()