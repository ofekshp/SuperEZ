# import requests
# from bs4 import BeautifulSoup
# import pymongo
# from datetime import datetime
# import time
# import random
# import logging
# from selenium import webdriver
# from selenium.webdriver.chrome.service import Service
# from selenium.webdriver.chrome.options import Options
# from selenium.webdriver.common.by import By
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from urllib.parse import urljoin
# import re
#
# # Configuration
# MONGODB_URI = "mongodb+srv://superezproject:ofoYnDHYWorlj2Pf@superez.v5ab25m.mongodb.net/"
# DATABASE_NAME = "super_ez"
# COLLECTION_NAME = "products"
# CHROMEDRIVER_PATH = r"C:/Users/mayag/.wdm\drivers/chromedriver/win64/127.0.6533.72/chromedriver-win32/chromedriver.exe"  # Update this path
#
# USER_AGENTS = [
#     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
#     'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15',
#     'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0'
# ]
#
# SUPERMARKETS = [
#     {
#         "name": "רמי לוי",
#         "id": "rami_levi",
#         "urls": [
#             "https://www.rami-levy.co.il/he/online/market",
#         ],
#         "selectors": {
#             "category": ".category-item",
#             "product": ".product-flex", # This is how you select the product item element
#             "name": ".online-product-name", # This is how you select the name element FOUND INSIDE THE PRODUCT ITEM ELEMENT
#             "price": ".currency"# This is how you select the name element FOUND INSIDE THE PRODUCT ITEM ELEMENT
#         }
#     },
#     {
#         "name": "רמי לוי",
#         "id": "rami_levi",
#         "urls": [
#             "https://www.rami-levy.co.il/he/online/market/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA",
#             "https://www.rami-levy.co.il/he/online/market/%D7%97%D7%9C%D7%91-%D7%91%D7%99%D7%A6%D7%99%D7%9D-%D7%95%D7%A1%D7%9C%D7%98%D7%99%D7%9D",
#             "https://www.rami-levy.co.il/he/online/market/%D7%91%D7%A9%D7%A8-%D7%95%D7%93%D7%92%D7%99%D7%9D",
#             "https://www.rami-levy.co.il/he/online/market/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%95%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA",
#             "https://www.rami-levy.co.il/he/online/market/%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D"
#         ],
#         "selectors": {
#             "category": ".category-item",
#             "product": ".product-flex",  # This is how you select the product item element
#             "name": ".inner-text",# This is how you select the name element FOUND INSIDE THE PRODUCT ITEM ELEMENT
#             "price": ".tag-price"  # This is how you select the name element FOUND INSIDE THE PRODUCT ITEM ELEMENT
#         }
#     },
#     {
#         "name": "רמי לוי",
#         "id": "rami_levi",
#         "urls": [
#             "https://www.rami-levy.co.il/he/online/market/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D-%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%90%D7%A4%D7%99%D7%94",
#             "https://www.rami-levy.co.il/he/online/market/%D7%A7%D7%98%D7%A0%D7%99%D7%95%D7%AA-%D7%95%D7%93%D7%92%D7%A0%D7%99%D7%9D",
#             "https://www.rami-levy.co.il/he/online/market/%D7%97%D7%98%D7%99%D7%A4%D7%99%D7%9D-%D7%95%D7%9E%D7%AA%D7%95%D7%A7%D7%99%D7%9D",
#             "https://www.rami-levy.co.il/he/online/market/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA",
#             "https://www.rami-levy.co.il/he/online/market/%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99-%D7%95%D7%9E%D7%AA%D7%9B%D7%9C%D7%94",
#             "https://www.rami-levy.co.il/he/online/market/%D7%90%D7%97%D7%96%D7%A7%D7%AA-%D7%94%D7%91%D7%99%D7%AA-%D7%95%D7%91%D7%A2-%D7%97",
#             "https://www.rami-levy.co.il/he/online/market/%D7%A4%D7%90%D7%A8%D7%9D-%D7%95%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA",
#             "https://www.rami-levy.co.il/he/online/market/%D7%9C%D7%97%D7%9D-%D7%9E%D7%90%D7%A4%D7%99%D7%9D-%D7%95%D7%94%D7%9E%D7%90%D7%A4%D7%99%D7%99%D7%94-%D7%94%D7%98%D7%A8%D7%99%D7%94",
#         ],
#         "selectors": {
#             "category": ".category-item",
#             "product": ".product-flex",  # This is how you select the product item element
#             "name": ".inner-text",# This is how you select the name element FOUND INSIDE THE PRODUCT ITEM ELEMENT
#             "price": ".tag-price"  # This is how you select the name element FOUND INSIDE THE PRODUCT ITEM ELEMENT
#         }
#     },
#     # {
#     #     "name": "שופרסל",
#     #     "id": "shufersal",
#     #     "urls": [
#     #         "https://www.shufersal.co.il/online/he/A",
#     #         "https://www.shufersal.co.il/online/he/A70",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/c/A01",
#     #         ],
#     #     "selectors": {
#     #         "category": ".miglog-cat",
#     #         "product": ".miglog-prod",
#     #         "name": ".text",
#     #         "price": ".number"
#     #     }
#     # },
#     # {
#     #     "name": "שופרסל",
#     #     "id": "shufersal",
#     #     "urls": [
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%91%D7%A9%D7%A8%2C-%D7%A2%D7%95%D7%A3-%D7%95%D7%93%D7%92%D7%99%D7%9D-/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%A2%D7%95%D7%A3-%D7%95%D7%94%D7%95%D7%93%D7%95/c/A0714?shuf_source=shufersal_singlecategoryA07&shuf_medium=banner&shuf_campaign=chicken&shuf_content=shufersal_chicken_130422&shuf_term=Shuf",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%91%D7%A9%D7%A8%2C-%D7%A2%D7%95%D7%A3-%D7%95%D7%93%D7%92%D7%99%D7%9D-/%D7%93%D7%92%D7%99%D7%9D/c/A0705",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%91%D7%A9%D7%A8%2C-%D7%A2%D7%95%D7%A3-%D7%95%D7%93%D7%92%D7%99%D7%9D-/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%91%D7%A9%D7%A8-%22%D7%A2%D7%9C-%D7%94%D7%90%D7%A9%22/c/A0711",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%91%D7%A9%D7%A8%2C-%D7%A2%D7%95%D7%A3-%D7%95%D7%93%D7%92%D7%99%D7%9D-/%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%9D-%D7%9C%D7%94%D7%9B%D7%A0%D7%94-%D7%9E%D7%94%D7%99%D7%A8%D7%94/c/A0717",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%91%D7%A9%D7%A8%2C-%D7%A2%D7%95%D7%A3-%D7%95%D7%93%D7%92%D7%99%D7%9D-/%D7%9E%D7%A0%D7%92%D7%9C%D7%99%D7%9D-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%9D-%D7%A0%D7%99%D7%9C%D7%95%D7%95%D7%99%D7%9D/c/A0720",
#     #         "https://www.shufersal.co.il/online/he/search?text=%D7%97%D7%93+%D7%A4%D7%A2%D7%9E%D7%99",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9C%D7%97%D7%9E%D7%99%D7%9D-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%9E%D7%90%D7%A4%D7%94/%D7%9C%D7%97%D7%9E%D7%99-%D7%9E%D7%97%D7%9E%D7%A6%D7%AA%2C-%D7%97%D7%9C%D7%95%D7%AA-%D7%95%D7%9C%D7%97%D7%9E%D7%99%D7%9D-%D7%A4%D7%A8%D7%95%D7%A1%D7%99%D7%9D/c/A1014",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9C%D7%97%D7%9E%D7%99%D7%9D-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%9E%D7%90%D7%A4%D7%94/%D7%9C%D7%97%D7%9E%D7%A0%D7%99%D7%95%D7%AA%2C-%D7%A4%D7%99%D7%AA%D7%95%D7%AA-%D7%95%D7%91%D7%92%D7%98%D7%99%D7%9D/c/A1015",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9C%D7%97%D7%9E%D7%99%D7%9D-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%9E%D7%90%D7%A4%D7%94/%D7%9E%D7%90%D7%A4%D7%99%D7%9D-%D7%9E%D7%9C%D7%95%D7%97%D7%99%D7%9D-%D7%95%D7%9E%D7%AA%D7%95%D7%A7%D7%99%D7%9D/c/A1016",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9C%D7%97%D7%9E%D7%99%D7%9D-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%9E%D7%90%D7%A4%D7%94/-%D7%A2%D7%95%D7%92%D7%95%D7%AA-%D7%95%D7%A2%D7%95%D7%92%D7%99%D7%95%D7%AA/c/A1017",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9C%D7%97%D7%9E%D7%99%D7%9D-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%9E%D7%90%D7%A4%D7%94/%D7%9C%D7%97%D7%9E%D7%99%D7%9D-%D7%95%D7%9C%D7%97%D7%9E%D7%A0%D7%99%D7%95%D7%AA-%D7%9C%D7%9C%D7%90-%D7%92%D7%9C%D7%95%D7%98%D7%9F-/c/A1018",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%90%D7%9C%D7%9B%D7%95%D7%94%D7%95%D7%9C-%D7%95%D7%99%D7%99%D7%9F/%D7%91%D7%99%D7%A8%D7%94-%D7%95%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%90%D7%A0%D7%A8%D7%92%D7%99%D7%94/c/A1314",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%90%D7%9C%D7%9B%D7%95%D7%94%D7%95%D7%9C-%D7%95%D7%99%D7%99%D7%9F/%D7%91%D7%99%D7%A8%D7%94-%D7%95%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%90%D7%A0%D7%A8%D7%92%D7%99%D7%94/c/A1314",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%90%D7%9C%D7%9B%D7%95%D7%94%D7%95%D7%9C-%D7%95%D7%99%D7%99%D7%9F/%D7%91%D7%95%D7%98%D7%99%D7%A7-%D7%94%D7%99%D7%99%D7%9F/c/A1323",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%90%D7%9C%D7%9B%D7%95%D7%94%D7%95%D7%9C-%D7%95%D7%99%D7%99%D7%9F/%D7%A7%D7%A4%D7%94-%D7%95%D7%AA%D7%94/c/A1305",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%90%D7%9C%D7%9B%D7%95%D7%94%D7%95%D7%9C-%D7%95%D7%99%D7%99%D7%9F/%D7%99%D7%99%D7%A0%D7%95%D7%AA-%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%9B%D7%94%D7%9C%D7%99%D7%99%D7%9D-%D7%95%D7%AA%D7%99%D7%A8%D7%95%D7%A9/c/A1320",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%90%D7%9C%D7%9B%D7%95%D7%94%D7%95%D7%9C-%D7%95%D7%99%D7%99%D7%9F/%D7%9E%D7%99%D7%9D-%D7%95%D7%A1%D7%95%D7%93%D7%94/c/A1302",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%90%D7%9C%D7%9B%D7%95%D7%94%D7%95%D7%9C-%D7%95%D7%99%D7%99%D7%9F/%D7%A7%D7%A4%D7%94-%D7%95%D7%AA%D7%94/c/A1305",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%90%D7%9C%D7%9B%D7%95%D7%94%D7%95%D7%9C-%D7%95%D7%99%D7%99%D7%9F/%D7%A7%D7%A4%D7%A1%D7%95%D7%9C%D7%95%D7%AA-%D7%95%D7%A4%D7%95%D7%9C%D7%99%D7%9D-%D7%9C%D7%90%D7%A1%D7%A4%D7%A8%D7%A1%D7%95/c/A1306",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%90%D7%9C%D7%9B%D7%95%D7%94%D7%95%D7%9C-%D7%95%D7%99%D7%99%D7%9F/%D7%A1%D7%99%D7%92%D7%A8%D7%99%D7%95%D7%AA-%D7%95%D7%92%D7%A4%D7%A8%D7%95%D7%A8%D7%99%D7%9D/c/A1326",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9E%D7%96%D7%95%D7%9F-%D7%9E%D7%A7%D7%95%D7%A8%D7%A8-%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D-%D7%95%D7%A0%D7%A7%D7%A0%D7%99%D7%A7%D7%99%D7%9D/c/A16",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%90%D7%A4%D7%99%D7%94-%D7%95%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D/c/A22",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%97%D7%98%D7%99%D7%A4%D7%99%D7%9D-%D7%9E%D7%AA%D7%95%D7%A7%D7%99%D7%9D-%D7%95%D7%93%D7%92%D7%A0%D7%99-%D7%91%D7%95%D7%A7%D7%A8/c/A25",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A4%D7%90%D7%A8%D7%9D-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/%D7%A1%D7%91%D7%95%D7%9F-%D7%A9%D7%9E%D7%A4%D7%95-%D7%95%D7%9E%D7%A8%D7%9B%D7%9A/c/A3114",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A4%D7%90%D7%A8%D7%9D-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/%D7%94%D7%92%D7%99%D7%99%D7%A0%D7%AA-%D7%94%D7%A4%D7%94/c/A3108",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A4%D7%90%D7%A8%D7%9D-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/%D7%93%D7%90%D7%95%D7%93%D7%95%D7%A8%D7%A0%D7%98/c/A3102",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A4%D7%90%D7%A8%D7%9D-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/%D7%92%D7%99%D7%9C%D7%95%D7%97-%D7%95%D7%94%D7%A1%D7%A8%D7%AA-%D7%A9%D7%99%D7%A2%D7%A8/c/A3117",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A4%D7%90%D7%A8%D7%9D-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%94%D7%92%D7%99%D7%99%D7%A0%D7%94/c/A3105",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A4%D7%90%D7%A8%D7%9D-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/%D7%98%D7%99%D7%A4%D7%95%D7%97-%D7%95%D7%A2%D7%99%D7%A6%D7%95%D7%91-%D7%A9%D7%99%D7%A2%D7%A8/c/A3111",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A4%D7%90%D7%A8%D7%9D-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/%D7%98%D7%99%D7%A4%D7%95%D7%97-%D7%92%D7%95%D7%A3-%D7%95%D7%A4%D7%A0%D7%99%D7%9D/c/A3126",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A4%D7%90%D7%A8%D7%9D-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%94%D7%92%D7%A0%D7%94-%D7%9E%D7%94%D7%A9%D7%9E%D7%A9-%D7%95%D7%94%D7%92%D7%95%D7%A3/c/A3128",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A4%D7%90%D7%A8%D7%9D-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%A7%D7%95%D7%A8%D7%95%D7%A0%D7%94/c/A3127",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A2%D7%95%D7%9C%D7%9D-%D7%94%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA/%D7%9E%D7%96%D7%95%D7%9F-%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA/c/A3201",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A2%D7%95%D7%9C%D7%9D-%D7%94%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA/%D7%98%D7%99%D7%A4%D7%95%D7%97-%D7%95%D7%94%D7%92%D7%A0%D7%94-%D7%9C%D7%AA%D7%99%D7%A0%D7%95%D7%A7/c/A3202",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A2%D7%95%D7%9C%D7%9D-%D7%94%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA/%D7%94%D7%9C%D7%91%D7%A9%D7%94-%D7%95%D7%90%D7%91%D7%99%D7%96%D7%A8%D7%99%D7%9D-%D7%9C%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA/c/A3203",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F-%D7%94%D7%91%D7%99%D7%AA-%D7%95%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99/%D7%97%D7%95%D7%9E%D7%A8%D7%99-%D7%A0%D7%99%D7%A7%D7%95%D7%99-%D7%9C%D7%91%D7%99%D7%AA/c/A3405",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F-%D7%94%D7%91%D7%99%D7%AA-%D7%95%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99/%D7%A0%D7%99%D7%A7%D7%95%D7%99-%D7%9B%D7%9C%D7%99%D7%9D/c/A3423",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F-%D7%94%D7%91%D7%99%D7%AA-%D7%95%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%9B%D7%91%D7%99%D7%A1%D7%94-%D7%95%D7%92%D7%99%D7%94%D7%95%D7%A5/c/A3408",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F-%D7%94%D7%91%D7%99%D7%AA-%D7%95%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99/%D7%90%D7%91%D7%99%D7%96%D7%A8%D7%99-%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/c/A3402",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F-%D7%94%D7%91%D7%99%D7%AA-%D7%95%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%A0%D7%99%D7%99%D7%A8/c/A3420",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F-%D7%94%D7%91%D7%99%D7%AA-%D7%95%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99/%D7%A9%D7%A7%D7%99%D7%95%D7%AA/c/A3417",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F-%D7%94%D7%91%D7%99%D7%AA-%D7%95%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99/%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99-%D7%95%D7%A0%D7%A8%D7%95%D7%AA/c/A3426",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F-%D7%94%D7%91%D7%99%D7%AA-%D7%95%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99/%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99-%D7%9C%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%90%D7%A4%D7%99%D7%94/c/A3428",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F-%D7%94%D7%91%D7%99%D7%AA-%D7%95%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99/%D7%A7%D7%95%D7%98%D7%9C%D7%99-%D7%97%D7%A8%D7%A7%D7%99%D7%9D/c/A3414",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F-%D7%94%D7%91%D7%99%D7%AA-%D7%95%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99/%D7%9E%D7%99%D7%95%D7%97%D7%93%D7%99%D7%9D-%D7%91%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/c/A3427",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F-%D7%94%D7%91%D7%99%D7%AA-%D7%95%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99/%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%9D-%D7%90%D7%A7%D7%95%D7%9C%D7%95%D7%92%D7%99%D7%99%D7%9D/c/A3411",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%95%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA-%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99/c/A2817",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%95%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA/%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%9D-%D7%9C%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%90%D7%A4%D7%99%D7%94/c/A2802",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%95%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA/%D7%93%D7%92%D7%A0%D7%99%D7%9D%2C-%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%95%D7%9E%D7%AA%D7%95%D7%A7%D7%99%D7%9D/c/A2803",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%95%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA/%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA-%D7%91%D7%9E%D7%A7%D7%A8%D7%A8/c/A2805",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%95%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA/%D7%93%D7%99%D7%90%D7%98-%D7%95%D7%9C%D7%9C%D7%90-%D7%A1%D7%95%D7%9B%D7%A8/c/A2808",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%95%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA/%D7%9C%D7%97%D7%9D-%D7%A7%D7%A8%D7%A7%D7%A8%D7%99%D7%9D-%D7%95%D7%A4%D7%A8%D7%99%D7%9B%D7%99%D7%95%D7%AA/c/A2811",
#     #         ],
#     #     "selectors": {
#     #         "category": ".miglog-cat",
#     #         "product": ".miglog-prod",
#     #         "name": ".text",
#     #         "price": ".price"
#     #     }
#     # },
#     # {
#     #     "name": "שופרסל",
#     #     "id": "shufersal",
#     #     "urls": [
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%95%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA/%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%9D-%D7%9C%D7%9C%D7%90-%D7%92%D7%9C%D7%95%D7%98%D7%9F/c/A2814",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%95%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA/%D7%9E%D7%9F-%D7%94%D7%9E%D7%A7%D7%A4%D7%99%D7%90/c/A2820",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%95%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA/%D7%97%D7%95%D7%9E%D7%A8%D7%99-%D7%A0%D7%99%D7%A7%D7%95%D7%99-%D7%90%D7%A7%D7%95%D7%9C%D7%95%D7%92%D7%99%D7%99%D7%9D/c/A2809",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA/%D7%99%D7%A8%D7%A7%D7%95%D7%AA/%D7%99%D7%A8%D7%A7%D7%95%D7%AA-%D7%98%D7%A8%D7%99%D7%99%D7%9D/c/A040801?shuf_source=shufersal_icon_dy&shuf_medium=iconA7001&shuf_campaign=veg&shuf_content=shufersal_veg_110523&shuf_term=dy",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA/%D7%A4%D7%99%D7%A8%D7%95%D7%AA/c/A0405",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA/%D7%99%D7%A8%D7%A7%D7%95%D7%AA-%D7%95%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%9E%D7%A6%D7%95%D7%A0%D7%A0%D7%99%D7%9D/c/A0409",
#     #         "https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA/%D7%A4%D7%99%D7%A6%D7%95%D7%97%D7%99%D7%9D-%D7%95%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%99%D7%91%D7%A9%D7%99%D7%9D/c/A0402"
#     #         ],
#     #     "selectors": {
#     #         "category": ".miglog-cat",
#     #         "product": ".miglog-prod",
#     #         "name": ".text",
#     #         "price": ".price"
#     #     }
#     # },
#     {
#         "name": "ויקטורי",
#         "id": "viktory",
#         "urls": [
#             "https://www.victoryonline.co.il/",
#             "https://www.victoryonline.co.il/categories/79706/products",
#             "https://www.victoryonline.co.il/categories/79705/products",
#             "https://www.victoryonline.co.il/categories/79707/products",
#             "https://www.victoryonline.co.il/categories/79720/products",
#             "https://www.victoryonline.co.il/categories/95010/products",
#             "https://www.victoryonline.co.il/categories/95012/products",
#             "https://www.victoryonline.co.il/categories/95011/products",
#             "https://www.victoryonline.co.il/categories/95809/products",
#             "https://www.victoryonline.co.il/categories/95013/products",
#             "https://www.victoryonline.co.il/categories/79689/products",
#             "https://www.victoryonline.co.il/categories/79688/products",
#             "https://www.victoryonline.co.il/categories/79690/products",
#             "https://www.victoryonline.co.il/categories/96550/products",
#             "https://www.victoryonline.co.il/categories/79822/products",
#             "https://www.victoryonline.co.il/categories/93709/products",
#             "https://www.victoryonline.co.il/categories/79823/products",
#             "https://www.victoryonline.co.il/categories/79824/products",
#             "https://www.victoryonline.co.il/categories/79732/products",
#             "https://www.victoryonline.co.il/categories/95814/products",
#             "https://www.victoryonline.co.il/categories/79621/products",
#         ],
#         "selectors": {
#             "category": ".category-menu-item",
#             "product": "sp-product",
#             "name": ".name",
#             "price": ".price"
#         }
#     },
#     {
#         "name": "ויקטורי",
#         "id": "viktory",
#         "urls": [
#             "https://www.victoryonline.co.il/categories/79823/products",
#             "https://www.victoryonline.co.il/categories/79824/products",
#             "https://www.victoryonline.co.il/categories/79732/products",
#             "https://www.victoryonline.co.il/categories/95814/products",
#             "https://www.victoryonline.co.il/categories/79621/products",
#             "https://www.victoryonline.co.il/categories/79623/products",
#             "https://www.victoryonline.co.il/categories/79624/products",
#             "https://www.victoryonline.co.il/categories/79622/products",
#             "https://www.victoryonline.co.il/categories/79620/products",
#             "https://www.victoryonline.co.il/categories/79605/products",
#             "https://www.victoryonline.co.il/categories/79604/products",
#             "https://www.victoryonline.co.il/categories/79606/products",
#             "https://www.victoryonline.co.il/categories/81224/products",
#             "https://www.victoryonline.co.il/categories/95824/products",
#             "https://www.victoryonline.co.il/categories/95828/products",
#             "https://www.victoryonline.co.il/categories/79592/products",
#             "https://www.victoryonline.co.il/categories/79670/products",
#             "https://www.victoryonline.co.il/categories/79668/products",
#             "https://www.victoryonline.co.il/categories/79669/products",
#             "https://www.victoryonline.co.il/categories/120930/products",
#             "https://www.victoryonline.co.il/categories/120936/products",
#             "https://www.victoryonline.co.il/categories/79840/products",
#             "https://www.victoryonline.co.il/categories/94568/products",
#             "https://www.victoryonline.co.il/categories/87293/products",
#             "https://www.victoryonline.co.il/categories/94589/products"
#         ],
#         "selectors": {
#             "category": ".category-menu-item",
#             "product": "sp-product",
#             "name": ".name",
#             "price": ".price"
#         }
#     },
#     {
#         "name": "ויקטורי",
#         "id": "viktory",
#         "urls": [
#             "https://www.victoryonline.co.il/categories/79654/products",
#             "https://www.victoryonline.co.il/categories/79655/products",
#             "https://www.victoryonline.co.il/categories/79742/products",
#             "https://www.victoryonline.co.il/categories/79744/products",
#             "https://www.victoryonline.co.il/categories/79743/products",
#             "https://www.victoryonline.co.il/categories/79572/products",
#             "https://www.victoryonline.co.il/categories/95186/products",
#             "https://www.victoryonline.co.il/categories/79574/products",
#             "https://www.victoryonline.co.il/categories/79573/products",
#             "https://www.victoryonline.co.il/categories/95797/products",
#             "https://www.victoryonline.co.il/categories/95798/products",
#             "https://www.victoryonline.co.il/categories/95807/products",
#             "https://www.victoryonline.co.il/categories/79769/products",
#             "https://www.victoryonline.co.il/categories/79768/products",
#             "https://www.victoryonline.co.il/categories/79766/products",
#             "https://www.victoryonline.co.il/categories/79767/products",
#             "https://www.victoryonline.co.il/categories/79770/products"
#         ],
#         "selectors": {
#             "category": ".category-menu-item",
#             "product": "sp-product",
#             "name": ".name",
#             "price": ".price"
#         }
#     },
#     {
#         "name": "חצי חינם",
#         "id": "hatzi_hinam",
#         "urls":[
#             "https://shop.hazi-hinam.co.il/catalog",
#             "https://shop.hazi-hinam.co.il/catalog/45/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA/10883/%D7%99%D7%A8%D7%A7%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/45/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA/10884/%D7%99%D7%A8%D7%A7%D7%95%D7%AA-%D7%90%D7%A8%D7%95%D7%96%D7%99%D7%9D-%D7%95%D7%9C%D7%A7%D7%98%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/45/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA/10885/%D7%A2%D7%A9%D7%91%D7%99-%D7%AA%D7%99%D7%91%D7%95%D7%9C--%D7%A0%D7%91%D7%98%D7%99%D7%9D-%D7%95%D7%A4%D7%98%D7%A8%D7%99%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/45/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA/10886/%D7%A4%D7%99%D7%A8%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/45/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA/10887/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%90%D7%A8%D7%95%D7%96%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/11211/%D7%97%D7%9C%D7%91-%D7%95%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%97%D7%9C%D7%91",
#             "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/10864/%D7%9E%D7%A2%D7%93%D7%A0%D7%99-%D7%99%D7%95%D7%92%D7%95%D7%A8%D7%98",
#             "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/11582/%D7%99%D7%95%D7%92%D7%95%D7%A8%D7%98-%D7%9C%D7%A9%D7%AA%D7%99%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/11486/%D7%9E%D7%A2%D7%93%D7%A0%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%A7%D7%99%D7%A0%D7%95%D7%97%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/10865/%D7%92%D7%91%D7%99%D7%A0%D7%95%D7%AA-%D7%A8%D7%9B%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/10866/%D7%92%D7%91%D7%99%D7%A0%D7%95%D7%AA-%D7%97%D7%A6%D7%99-%D7%A7%D7%A9%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/10867/%D7%92%D7%91%D7%99%D7%A0%D7%95%D7%AA-%D7%A6%D7%94%D7%95%D7%91%D7%95%D7%AA-%D7%95%D7%A7%D7%A9%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/10868/%D7%97%D7%9E%D7%90%D7%94-%D7%95%D7%9E%D7%A8%D7%92%D7%A8%D7%99%D7%A0%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/10869/%D7%A9%D7%9E%D7%A0%D7%AA--%D7%A7%D7%A6%D7%A4%D7%AA--%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%90%D7%A4%D7%99%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/10870/%D7%97%D7%9C%D7%91-%D7%95%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%97%D7%9C%D7%91-%D7%A2%D7%9E%D7%99%D7%93%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/11592/%D7%A4%D7%A1%D7%98%D7%95%D7%AA-%D7%9E%D7%A6%D7%95%D7%A0%D7%A0%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/11213/%D7%91%D7%99%D7%A6%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/62/%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA-%D7%95%D7%A4%D7%A2%D7%95%D7%98%D7%95%D7%AA/10833/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%AA-%D7%A4%D7%A2%D7%95%D7%98%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/62/%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA-%D7%95%D7%A4%D7%A2%D7%95%D7%98%D7%95%D7%AA/10834/%D7%9E%D7%96%D7%95%D7%9F-%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/62/%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA-%D7%95%D7%A4%D7%A2%D7%95%D7%98%D7%95%D7%AA/10812/%D7%97%D7%99%D7%AA%D7%95%D7%9C%D7%99%D7%9D-%D7%95%D7%9E%D7%92%D7%91%D7%95%D7%A0%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/62/%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA-%D7%95%D7%A4%D7%A2%D7%95%D7%98%D7%95%D7%AA/11179/%D7%90%D7%91%D7%99%D7%96%D7%A8%D7%99-%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/136/%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%9D-%D7%A2%D7%9D-%D7%97%D7%9C%D7%91%D7%95%D7%9F/11634/%D7%97%D7%98%D7%99%D7%A4%D7%99%D7%9D-%D7%A2%D7%9D-%D7%97%D7%9C%D7%91%D7%95%D7%9F",
#             "https://shop.hazi-hinam.co.il/catalog/136/%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%9D-%D7%A2%D7%9D-%D7%97%D7%9C%D7%91%D7%95%D7%9F/11636/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%A2%D7%9D-%D7%97%D7%9C%D7%91%D7%95%D7%9F",
#             "https://shop.hazi-hinam.co.il/catalog/136/%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%9D-%D7%A2%D7%9D-%D7%97%D7%9C%D7%91%D7%95%D7%9F/11637/%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%9D-%D7%A2%D7%9D-%D7%97%D7%9C%D7%91%D7%95%D7%9F",
#             "https://shop.hazi-hinam.co.il/catalog/65/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%9C%D7%9C%D7%90-%D7%92%D7%9C%D7%95%D7%98%D7%9F-%D7%95%D7%9C%D7%9C%D7%90-%D7%AA%D7%95%D7%A1%D7%A4%D7%AA-%D7%A1%D7%95%D7%9B%D7%A8/10899/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99",
#             "https://shop.hazi-hinam.co.il/catalog/65/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%9C%D7%9C%D7%90-%D7%92%D7%9C%D7%95%D7%98%D7%9F-%D7%95%D7%9C%D7%9C%D7%90-%D7%AA%D7%95%D7%A1%D7%A4%D7%AA-%D7%A1%D7%95%D7%9B%D7%A8/11136/%D7%9C%D7%9C%D7%90-%D7%92%D7%9C%D7%95%D7%98%D7%9F",
#             "https://shop.hazi-hinam.co.il/catalog/65/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%9C%D7%9C%D7%90-%D7%92%D7%9C%D7%95%D7%98%D7%9F-%D7%95%D7%9C%D7%9C%D7%90-%D7%AA%D7%95%D7%A1%D7%A4%D7%AA-%D7%A1%D7%95%D7%9B%D7%A8/11137/%D7%9C%D7%9C%D7%90-%D7%AA%D7%95%D7%A1%D7%A4%D7%AA-%D7%A1%D7%95%D7%9B%D7%A8",
#             "https://shop.hazi-hinam.co.il/catalog/129/%D7%94%D7%A6%D7%9E%D7%97%D7%95%D7%A0%D7%99%D7%94/11436/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%A6%D7%9E%D7%97%D7%99%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/129/%D7%94%D7%A6%D7%9E%D7%97%D7%95%D7%A0%D7%99%D7%94/11437/%D7%AA%D7%97%D7%9C%D7%99%D7%A4%D7%99-%D7%92%D7%91%D7%99%D7%A0%D7%94--%D7%9E%D7%A2%D7%93%D7%A0%D7%99%D7%9D-%D7%95%D7%A8%D7%98%D7%91%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/129/%D7%94%D7%A6%D7%9E%D7%97%D7%95%D7%A0%D7%99%D7%94/11438/%D7%98%D7%95%D7%A4%D7%95--%D7%A1%D7%99%D7%99%D7%98%D7%9F-%D7%95%D7%AA%D7%97%D7%9C%D7%99%D7%A4%D7%99-%D7%91%D7%A9%D7%A8",
#             "https://shop.hazi-hinam.co.il/catalog/129/%D7%94%D7%A6%D7%9E%D7%97%D7%95%D7%A0%D7%99%D7%94/11439/%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D-%D7%9E%D7%9F-%D7%94%D7%A6%D7%95%D7%9E%D7%97",
#             "https://shop.hazi-hinam.co.il/catalog/128/%D7%9E%D7%96%D7%95%D7%9F-%D7%95%D7%A6%D7%99%D7%95%D7%93-%D7%9C%D7%91%D7%A2%D7%9C%D7%99-%D7%97%D7%99%D7%99%D7%9D/11410/%D7%9E%D7%96%D7%95%D7%9F-%D7%9C%D7%97%D7%AA%D7%95%D7%9C%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/128/%D7%9E%D7%96%D7%95%D7%9F-%D7%95%D7%A6%D7%99%D7%95%D7%93-%D7%9C%D7%91%D7%A2%D7%9C%D7%99-%D7%97%D7%99%D7%99%D7%9D/11411/%D7%9E%D7%96%D7%95%D7%9F-%D7%9C%D7%9B%D7%9C%D7%91%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/128/%D7%9E%D7%96%D7%95%D7%9F-%D7%95%D7%A6%D7%99%D7%95%D7%93-%D7%9C%D7%91%D7%A2%D7%9C%D7%99-%D7%97%D7%99%D7%99%D7%9D/11412/%D7%A6%D7%99%D7%95%D7%93-%D7%9C%D7%91%D7%A2%D7%9C%D7%99-%D7%97%D7%99%D7%99%D7%9D"
#             ],
#         "selectors": {
#             "category": "catalog",
#             "product": ".product-info[role='link']",
#             "name": ".title",
#             "price": ".price-regular"
#         }
#     },
#     {
#         "name": "חצי חינם",
#         "id": "hatzi_hinam",
#         "urls": [
#             "https://shop.hazi-hinam.co.il/catalog/46/%D7%A7%D7%A6%D7%91%D7%99%D7%94/10888/%D7%9E%D7%95%D7%A6%D7%A8%D7%99%20%D7%A2%D7%95%D7%A3",
#             "https://shop.hazi-hinam.co.il/catalog/46/%D7%A7%D7%A6%D7%91%D7%99%D7%94/10889/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%94%D7%95%D7%93%D7%95",
#             "https://shop.hazi-hinam.co.il/catalog/46/%D7%A7%D7%A6%D7%91%D7%99%D7%94/10890/%D7%91%D7%A9%D7%A8-%D7%91%D7%A7%D7%A8-%D7%95%D7%9B%D7%91%D7%A9",
#             "https://shop.hazi-hinam.co.il/catalog/46/%D7%A7%D7%A6%D7%91%D7%99%D7%94/11771/%D7%91%D7%A9%D7%A8-%D7%91%D7%A7%D7%A8-%D7%95%D7%A2%D7%95%D7%A3-%D7%A7%D7%A4%D7%95%D7%90",
#             "https://shop.hazi-hinam.co.il/catalog/87/%D7%93%D7%92%D7%99%D7%94/11233/%D7%93%D7%92%D7%99%D7%9D-%D7%98%D7%A8%D7%99%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/87/%D7%93%D7%92%D7%99%D7%94/11770/%D7%93%D7%92%D7%99%D7%9D-%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/41/%D7%9E%D7%A2%D7%93%D7%A0%D7%99%D7%99%D7%AA-%D7%92%D7%91%D7%99%D7%A0%D7%95%D7%AA/10891/%D7%92%D7%91%D7%99%D7%A0%D7%95%D7%AA-%D7%A8%D7%9B%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/41/%D7%9E%D7%A2%D7%93%D7%A0%D7%99%D7%99%D7%AA-%D7%92%D7%91%D7%99%D7%A0%D7%95%D7%AA/10892/%D7%92%D7%91%D7%99%D7%A0%D7%95%D7%AA-%D7%97%D7%A6%D7%99-%D7%A7%D7%A9%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/41/%D7%9E%D7%A2%D7%93%D7%A0%D7%99%D7%99%D7%AA-%D7%92%D7%91%D7%99%D7%A0%D7%95%D7%AA/10893/%D7%92%D7%91%D7%99%D7%A0%D7%95%D7%AA-%D7%A6%D7%94%D7%95%D7%91%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/41/%D7%9E%D7%A2%D7%93%D7%A0%D7%99%D7%99%D7%AA-%D7%92%D7%91%D7%99%D7%A0%D7%95%D7%AA/10894/%D7%92%D7%91%D7%99%D7%A0%D7%95%D7%AA-%D7%A7%D7%A9%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/44/%D7%9E%D7%A2%D7%93%D7%A0%D7%99%D7%99%D7%AA-%D7%A1%D7%9C%D7%98%D7%99%D7%9D-%D7%95%D7%93%D7%92%D7%99%D7%9D/10896/%D7%A1%D7%9C%D7%98%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/44/%D7%9E%D7%A2%D7%93%D7%A0%D7%99%D7%99%D7%AA-%D7%A1%D7%9C%D7%98%D7%99%D7%9D-%D7%95%D7%93%D7%92%D7%99%D7%9D/10897/%D7%93%D7%92%D7%99%D7%9D-%D7%9E%D7%A2%D7%95%D7%A9%D7%A0%D7%99%D7%9D-%D7%95%D7%9B%D7%91%D7%95%D7%A9%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/82/%D7%9E%D7%A2%D7%93%D7%A0%D7%99%D7%99%D7%AA-%D7%A0%D7%A7%D7%A0%D7%99%D7%A7%D7%99%D7%9D/11141/%D7%A0%D7%A7%D7%A0%D7%99%D7%A7%D7%99%D7%9D-%D7%95%D7%A4%D7%A1%D7%98%D7%A8%D7%9E%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/67/%D7%9C%D7%97%D7%9E%D7%99%D7%9D--%D7%A2%D7%95%D7%92%D7%95%D7%AA-%D7%95%D7%A2%D7%95%D7%92%D7%99%D7%95%D7%AA/11237/%D7%9C%D7%97%D7%9D--%D7%97%D7%9C%D7%94--%D7%9C%D7%97%D7%9E%D7%A0%D7%99%D7%95%D7%AA--%D7%A4%D7%99%D7%AA%D7%95%D7%AA-%D7%95%D7%98%D7%95%D7%A8%D7%98%D7%99%D7%99%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/67/%D7%9C%D7%97%D7%9E%D7%99%D7%9D--%D7%A2%D7%95%D7%92%D7%95%D7%AA-%D7%95%D7%A2%D7%95%D7%92%D7%99%D7%95%D7%AA/10847/%D7%A2%D7%95%D7%92%D7%95%D7%AA-%D7%95%D7%A2%D7%95%D7%92%D7%95%D7%AA-%D7%90%D7%99%D7%A9%D7%99%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/67/%D7%9C%D7%97%D7%9E%D7%99%D7%9D--%D7%A2%D7%95%D7%92%D7%95%D7%AA-%D7%95%D7%A2%D7%95%D7%92%D7%99%D7%95%D7%AA/11485/%D7%A2%D7%95%D7%92%D7%99%D7%95%D7%AA--%D7%95%D7%95%D7%A4%D7%9C%D7%99%D7%9D--%D7%91%D7%99%D7%A1%D7%A7%D7%95%D7%95%D7%98%D7%99%D7%9D-%D7%95%D7%92%D7%91%D7%99%D7%A2%D7%99-%D7%92%D7%9C%D7%99%D7%93%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/67/%D7%9C%D7%97%D7%9E%D7%99%D7%9D--%D7%A2%D7%95%D7%92%D7%95%D7%AA-%D7%95%D7%A2%D7%95%D7%92%D7%99%D7%95%D7%AA/10859/%D7%A4%D7%A8%D7%99%D7%9B%D7%99%D7%95%D7%AA--%D7%A6%D7%A0%D7%99%D7%9E%D7%99%D7%9D-%D7%95%D7%A7%D7%A8%D7%A7%D7%A8%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/67/%D7%9C%D7%97%D7%9E%D7%99%D7%9D--%D7%A2%D7%95%D7%92%D7%95%D7%AA-%D7%95%D7%A2%D7%95%D7%92%D7%99%D7%95%D7%AA/11238/%D7%9C%D7%97%D7%9E%D7%99%D7%9D-%D7%95%D7%9C%D7%97%D7%9E%D7%A0%D7%99%D7%95%D7%AA-%D7%9E%D7%90%D7%A4%D7%99%D7%99%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/67/%D7%9C%D7%97%D7%9E%D7%99%D7%9D--%D7%A2%D7%95%D7%92%D7%95%D7%AA-%D7%95%D7%A2%D7%95%D7%92%D7%99%D7%95%D7%AA/11239/%D7%9E%D7%90%D7%A4%D7%99%D7%9D-%D7%9E%D7%90%D7%A4%D7%99%D7%99%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/72/%D7%A7%D7%98%D7%A0%D7%99%D7%95%D7%AA-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%99%D7%A1%D7%95%D7%93/10853/%D7%A9%D7%9E%D7%9F--%D7%A9%D7%9E%D7%9F-%D7%96%D7%99%D7%AA-%D7%95%D7%AA%D7%A8%D7%A1%D7%99%D7%A1%D7%99-%D7%A9%D7%9E%D7%9F",
#             "https://shop.hazi-hinam.co.il/catalog/72/%D7%A7%D7%98%D7%A0%D7%99%D7%95%D7%AA-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%99%D7%A1%D7%95%D7%93/10854/%D7%97%D7%95%D7%9E%D7%A5-%D7%95%D7%9E%D7%99%D7%A5-%D7%9C%D7%99%D7%9E%D7%95%D7%9F",
#             "https://shop.hazi-hinam.co.il/catalog/72/%D7%A7%D7%98%D7%A0%D7%99%D7%95%D7%AA-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%99%D7%A1%D7%95%D7%93/10855/%D7%A7%D7%98%D7%A0%D7%99%D7%95%D7%AA-%D7%90%D7%95%D7%A8%D7%96-%D7%95%D7%A7%D7%95%D7%A1%D7%A7%D7%95%D7%A1",
#             "https://shop.hazi-hinam.co.il/catalog/72/%D7%A7%D7%98%D7%A0%D7%99%D7%95%D7%AA-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%99%D7%A1%D7%95%D7%93/10856/%D7%A7%D7%9E%D7%97--%D7%9E%D7%9C%D7%97-%D7%95%D7%A1%D7%95%D7%9B%D7%A8",
#             "https://shop.hazi-hinam.co.il/catalog/72/%D7%A7%D7%98%D7%A0%D7%99%D7%95%D7%AA-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%99%D7%A1%D7%95%D7%93/11666/%D7%A4%D7%99%D7%A8%D7%95%D7%A8%D7%99-%D7%9C%D7%97%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/70/%D7%A7%D7%A4%D7%94--%D7%AA%D7%94-%D7%95%D7%90%D7%91%D7%A7%D7%95%D7%AA-%D7%A9%D7%AA%D7%99%D7%94/10845/%D7%A7%D7%A4%D7%94-%D7%95%D7%90%D7%91%D7%A7%D7%95%D7%AA-%D7%A9%D7%AA%D7%99%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/70/%D7%A7%D7%A4%D7%94--%D7%AA%D7%94-%D7%95%D7%90%D7%91%D7%A7%D7%95%D7%AA-%D7%A9%D7%AA%D7%99%D7%94/11595/%D7%A7%D7%A4%D7%A1%D7%95%D7%9C%D7%95%D7%AA-%D7%A7%D7%A4%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/70/%D7%A7%D7%A4%D7%94--%D7%AA%D7%94-%D7%95%D7%90%D7%91%D7%A7%D7%95%D7%AA-%D7%A9%D7%AA%D7%99%D7%94/10846/%D7%AA%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/70/%D7%A7%D7%A4%D7%94--%D7%AA%D7%94-%D7%95%D7%90%D7%91%D7%A7%D7%95%D7%AA-%D7%A9%D7%AA%D7%99%D7%94/11620/%D7%97%D7%9C%D7%99%D7%98%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/11270/%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%9D-%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99%D7%99%D7%9D-%D7%9C%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%90%D7%A4%D7%99%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/11271/%D7%A9%D7%A7%D7%99%D7%95%D7%AA-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%90%D7%A8%D7%99%D7%96%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/11272/%D7%A0%D7%A8%D7%95%D7%AA-%D7%95%D7%92%D7%A4%D7%A8%D7%95%D7%A8%D7%99%D7%9D"
#         ],
#         "selectors": {
#             "category": "catalog",
#             "product": ".product-info[role='link']",
#             "name": ".title",
#             "price": ".price-regular"
#         }
#     },
#     {
#         "name": "חצי חינם",
#         "id": "hatzi_hinam",
#         "urls": [
#             "https://shop.hazi-hinam.co.il/catalog/74/%D7%A4%D7%A1%D7%98%D7%94--%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%AA%D7%99%D7%91%D7%95%D7%9C/10838/%D7%9E%D7%A8%D7%A7%D7%99%D7%9D--%D7%AA%D7%99%D7%91%D7%95%D7%9C-%D7%95%D7%AA%D7%91%D7%A9%D7%99%D7%9C%D7%99%D7%9D-%D7%9E%D7%94%D7%99%D7%A8%D7%99-%D7%94%D7%9B%D7%A0%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/74/%D7%A4%D7%A1%D7%98%D7%94--%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%AA%D7%99%D7%91%D7%95%D7%9C/10839/%D7%A4%D7%A1%D7%98%D7%94--%D7%90%D7%98%D7%A8%D7%99%D7%95%D7%AA-%D7%95%D7%A9%D7%A7%D7%93%D7%99-%D7%9E%D7%A8%D7%A7",
#             "https://shop.hazi-hinam.co.il/catalog/74/%D7%A4%D7%A1%D7%98%D7%94--%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%AA%D7%99%D7%91%D7%95%D7%9C/11539/%D7%98%D7%97%D7%99%D7%A0%D7%94-%D7%92%D7%95%D7%9C%D7%9E%D7%99%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/74/%D7%A4%D7%A1%D7%98%D7%94--%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%AA%D7%99%D7%91%D7%95%D7%9C/11540/%D7%A7%D7%98%D7%A9%D7%95%D7%A4--%D7%9E%D7%99%D7%95%D7%A0%D7%96-%D7%95%D7%97%D7%A8%D7%93%D7%9C",
#             "https://shop.hazi-hinam.co.il/catalog/74/%D7%A4%D7%A1%D7%98%D7%94--%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%AA%D7%99%D7%91%D7%95%D7%9C/10840/%D7%9E%D7%9E%D7%A8%D7%97%D7%99%D7%9D-%D7%95%D7%A8%D7%98%D7%91%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/74/%D7%A4%D7%A1%D7%98%D7%94--%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%AA%D7%99%D7%91%D7%95%D7%9C/10857/%D7%90%D7%A1%D7%99%D7%99%D7%90%D7%AA%D7%99",
#             "https://shop.hazi-hinam.co.il/catalog/77/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%90%D7%A4%D7%99%D7%94-%D7%95%D7%9E%D7%9E%D7%A8%D7%97%D7%99%D7%9D/10835/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%90%D7%A4%D7%99%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/77/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%90%D7%A4%D7%99%D7%94-%D7%95%D7%9E%D7%9E%D7%A8%D7%97%D7%99%D7%9D/10836/%D7%A8%D7%99%D7%91%D7%95%D7%AA-%D7%95%D7%9E%D7%A2%D7%93%D7%A0%D7%99-%D7%A4%D7%99%D7%A8%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/77/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%90%D7%A4%D7%99%D7%94-%D7%95%D7%9E%D7%9E%D7%A8%D7%97%D7%99%D7%9D/11203/%D7%97%D7%9C%D7%95%D7%95%D7%94--%D7%93%D7%91%D7%A9-%D7%95%D7%A1%D7%99%D7%9C%D7%90%D7%9F",
#             "https://shop.hazi-hinam.co.il/catalog/77/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%90%D7%A4%D7%99%D7%94-%D7%95%D7%9E%D7%9E%D7%A8%D7%97%D7%99%D7%9D/11204/%D7%9E%D7%9E%D7%A8%D7%97%D7%99%D7%9D-%D7%9E%D7%AA%D7%95%D7%A7%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/69/%D7%93%D7%92%D7%A0%D7%99-%D7%91%D7%95%D7%A7%D7%A8--%D7%97%D7%98%D7%99%D7%A4%D7%99-%D7%93%D7%92%D7%A0%D7%99%D7%9D-%D7%95%D7%92%D7%A8%D7%A0%D7%95%D7%9C%D7%94/10841/%D7%93%D7%92%D7%A0%D7%99-%D7%91%D7%95%D7%A7%D7%A8",
#             "https://shop.hazi-hinam.co.il/catalog/69/%D7%93%D7%92%D7%A0%D7%99-%D7%91%D7%95%D7%A7%D7%A8--%D7%97%D7%98%D7%99%D7%A4%D7%99-%D7%93%D7%92%D7%A0%D7%99%D7%9D-%D7%95%D7%92%D7%A8%D7%A0%D7%95%D7%9C%D7%94/11205/%D7%97%D7%98%D7%99%D7%A4%D7%99-%D7%93%D7%92%D7%A0%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/69/%D7%93%D7%92%D7%A0%D7%99-%D7%91%D7%95%D7%A7%D7%A8--%D7%97%D7%98%D7%99%D7%A4%D7%99-%D7%93%D7%92%D7%A0%D7%99%D7%9D-%D7%95%D7%92%D7%A8%D7%A0%D7%95%D7%9C%D7%94/11206/%D7%92%D7%A8%D7%A0%D7%95%D7%9C%D7%94-%D7%95%D7%A9%D7%99%D7%91%D7%95%D7%9C%D7%AA-%D7%A9%D7%95%D7%A2%D7%9C",
#             "https://shop.hazi-hinam.co.il/catalog/66/%D7%9E%D7%9E%D7%AA%D7%A7%D7%99%D7%9D-%D7%95%D7%97%D7%98%D7%99%D7%A4%D7%99%D7%9D/10842/%D7%98%D7%91%D7%9C%D7%90%D7%95%D7%AA-%D7%A9%D7%95%D7%A7%D7%95%D7%9C%D7%93",
#             "https://shop.hazi-hinam.co.il/catalog/66/%D7%9E%D7%9E%D7%AA%D7%A7%D7%99%D7%9D-%D7%95%D7%97%D7%98%D7%99%D7%A4%D7%99%D7%9D/10843/%D7%97%D7%98%D7%99%D7%A4%D7%99-%D7%A9%D7%95%D7%A7%D7%95%D7%9C%D7%93",
#             "https://shop.hazi-hinam.co.il/catalog/66/%D7%9E%D7%9E%D7%AA%D7%A7%D7%99%D7%9D-%D7%95%D7%97%D7%98%D7%99%D7%A4%D7%99%D7%9D/10844/%D7%91%D7%95%D7%A0%D7%91%D7%95%D7%A0%D7%99%D7%99%D7%A8%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/66/%D7%9E%D7%9E%D7%AA%D7%A7%D7%99%D7%9D-%D7%95%D7%97%D7%98%D7%99%D7%A4%D7%99%D7%9D/11207/%D7%A1%D7%95%D7%9B%D7%A8%D7%99%D7%95%D7%AA-%D7%95%D7%9E%D7%A8%D7%A9%D7%9E%D7%9C%D7%95",
#             "https://shop.hazi-hinam.co.il/catalog/66/%D7%9E%D7%9E%D7%AA%D7%A7%D7%99%D7%9D-%D7%95%D7%97%D7%98%D7%99%D7%A4%D7%99%D7%9D/11583/%D7%9E%D7%A1%D7%98%D7%99%D7%A7%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/80/%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D/10875/%D7%91%D7%A9%D7%A8-%D7%91%D7%A7%D7%A8-%D7%95%D7%A2%D7%95%D7%A3",
#             "https://shop.hazi-hinam.co.il/catalog/80/%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D/10876/%D7%93%D7%92%D7%99%D7%9D-%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/80/%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D/10877/%D7%99%D7%A8%D7%A7%D7%95%D7%AA-%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/80/%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D/10878/%D7%91%D7%A6%D7%A7%D7%99%D7%9D--%D7%A4%D7%99%D7%A6%D7%95%D7%AA-%D7%95%D7%9E%D7%90%D7%A4%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/80/%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D/10879/%D7%9E%D7%90%D7%9B%D7%9C%D7%99%D7%9D-%D7%9E%D7%95%D7%9B%D7%A0%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/84/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D/11180/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99-%D7%99%D7%A8%D7%A7%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/84/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D/11181/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99-%D7%9E%D7%9C%D7%A4%D7%A4%D7%95%D7%A0%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/84/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D/11182/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99-%D7%96%D7%99%D7%AA%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/84/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D/11183/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99-%D7%A2%D7%92%D7%91%D7%A0%D7%99%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/84/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D/11184/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99-%D7%93%D7%92%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/84/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D/11185/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99-%D7%98%D7%95%D7%A0%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/84/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D/11186/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99-%D7%A4%D7%99%D7%A8%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/79/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/10852/%D7%9E%D7%99%D7%9D-%D7%95%D7%A1%D7%95%D7%93%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/79/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/11424/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%9E%D7%95%D7%92%D7%96%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/79/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/10851/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%A7%D7%9C%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/79/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/11210/%D7%AA%D7%A8%D7%9B%D7%99%D7%96%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/79/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/11209/%D7%91%D7%99%D7%A8%D7%94-%D7%95%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%90%D7%A0%D7%A8%D7%92%D7%99%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/79/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/10850/%D7%99%D7%99%D7%A0%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/79/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/11384/%D7%95%D7%95%D7%93%D7%A7%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/79/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/11385/%D7%A2%D7%A8%D7%A7-%D7%95%D7%90%D7%95%D7%96%D7%95",
#             "https://shop.hazi-hinam.co.il/catalog/79/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/11386/%D7%9C%D7%99%D7%A7%D7%A8-%D7%95%D7%A7%D7%95%D7%A7%D7%98%D7%99%D7%99%D7%9C",
#             "https://shop.hazi-hinam.co.il/catalog/79/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/11387/%D7%95%D7%95%D7%99%D7%A1%D7%A7%D7%99-%D7%95%D7%91%D7%A8%D7%A0%D7%93%D7%99",
#             "https://shop.hazi-hinam.co.il/catalog/83/%D7%97%D7%9E%D7%95%D7%A6%D7%99%D7%94/11142/%D7%96%D7%99%D7%AA%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/83/%D7%97%D7%9E%D7%95%D7%A6%D7%99%D7%94/11143/%D7%9E%D7%9C%D7%A4%D7%A4%D7%95%D7%A0%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/83/%D7%97%D7%9E%D7%95%D7%A6%D7%99%D7%94/11144/%D7%99%D7%A8%D7%A7%D7%95%D7%AA-%D7%9B%D7%91%D7%95%D7%A9%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/63/%D7%A1%D7%9C%D7%98%D7%99%D7%9D-%D7%95%D7%A0%D7%A7%D7%A0%D7%99%D7%A7%D7%99%D7%9D-%D7%90%D7%A8%D7%95%D7%96%D7%99%D7%9D/11598/%D7%97%D7%95%D7%9E%D7%95%D7%A1-%D7%95%D7%98%D7%97%D7%99%D7%A0%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/63/%D7%A1%D7%9C%D7%98%D7%99%D7%9D-%D7%95%D7%A0%D7%A7%D7%A0%D7%99%D7%A7%D7%99%D7%9D-%D7%90%D7%A8%D7%95%D7%96%D7%99%D7%9D/10873/%D7%A1%D7%9C%D7%98%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/63/%D7%A1%D7%9C%D7%98%D7%99%D7%9D-%D7%95%D7%A0%D7%A7%D7%A0%D7%99%D7%A7%D7%99%D7%9D-%D7%90%D7%A8%D7%95%D7%96%D7%99%D7%9D/10874/%D7%A0%D7%A7%D7%A0%D7%99%D7%A7%D7%99%D7%9D-%D7%95%D7%A4%D7%A1%D7%98%D7%A8%D7%9E%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/63/%D7%A1%D7%9C%D7%98%D7%99%D7%9D-%D7%95%D7%A0%D7%A7%D7%A0%D7%99%D7%A7%D7%99%D7%9D-%D7%90%D7%A8%D7%95%D7%96%D7%99%D7%9D/11573/%D7%A0%D7%A7%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%AA",
#             "https://shop.hazi-hinam.co.il/catalog/71/%D7%A4%D7%99%D7%A6%D7%95%D7%97%D7%99%D7%9D--%D7%AA%D7%91%D7%9C%D7%99%D7%A0%D7%99%D7%9D-%D7%95%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%99%D7%91%D7%A9%D7%99%D7%9D/10861/%D7%A4%D7%99%D7%A6%D7%95%D7%97%D7%99%D7%9D-%D7%90%D7%A8%D7%95%D7%96%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/71/%D7%A4%D7%99%D7%A6%D7%95%D7%97%D7%99%D7%9D--%D7%AA%D7%91%D7%9C%D7%99%D7%A0%D7%99%D7%9D-%D7%95%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%99%D7%91%D7%A9%D7%99%D7%9D/10862/%D7%A4%D7%99%D7%A6%D7%95%D7%97%D7%99%D7%9D-%D7%91%D7%9E%D7%A9%D7%A7%D7%9C",
#             "https://shop.hazi-hinam.co.il/catalog/71/%D7%A4%D7%99%D7%A6%D7%95%D7%97%D7%99%D7%9D--%D7%AA%D7%91%D7%9C%D7%99%D7%A0%D7%99%D7%9D-%D7%95%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%99%D7%91%D7%A9%D7%99%D7%9D/10863/%D7%AA%D7%91%D7%9C%D7%99%D7%A0%D7%99%D7%9D-%D7%90%D7%A8%D7%95%D7%96%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/71/%D7%A4%D7%99%D7%A6%D7%95%D7%97%D7%99%D7%9D--%D7%AA%D7%91%D7%9C%D7%99%D7%A0%D7%99%D7%9D-%D7%95%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%99%D7%91%D7%A9%D7%99%D7%9D/11138/%D7%AA%D7%91%D7%9C%D7%99%D7%A0%D7%99%D7%9D-%D7%91%D7%9E%D7%A9%D7%A7%D7%9C",
#             "https://shop.hazi-hinam.co.il/catalog/71/%D7%A4%D7%99%D7%A6%D7%95%D7%97%D7%99%D7%9D--%D7%AA%D7%91%D7%9C%D7%99%D7%A0%D7%99%D7%9D-%D7%95%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%99%D7%91%D7%A9%D7%99%D7%9D/11139/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%99%D7%91%D7%A9%D7%99%D7%9D-%D7%90%D7%A8%D7%95%D7%96%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/71/%D7%A4%D7%99%D7%A6%D7%95%D7%97%D7%99%D7%9D--%D7%AA%D7%91%D7%9C%D7%99%D7%A0%D7%99%D7%9D-%D7%95%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%99%D7%91%D7%A9%D7%99%D7%9D/11140/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%99%D7%91%D7%A9%D7%99%D7%9D-%D7%91%D7%9E%D7%A9%D7%A7%D7%9C",
#             "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10824/%D7%A9%D7%9E%D7%A4%D7%95",
#             "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10825/%D7%9E%D7%A8%D7%9B%D7%9A",
#             "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10826/%D7%A1%D7%91%D7%95%D7%9F-%D7%A8%D7%97%D7%A6%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10827/%D7%93%D7%90%D7%95%D7%93%D7%95%D7%A8%D7%A0%D7%98-%D7%9C%D7%90%D7%99%D7%A9%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/11409/%D7%93%D7%90%D7%95%D7%93%D7%95%D7%A8%D7%A0%D7%98-%D7%9C%D7%92%D7%91%D7%A8",
#             "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/11599/%D7%94%D7%92%D7%A0%D7%94-%D7%9E%D7%94%D7%A9%D7%9E%D7%A9",
#             "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10828/%D7%AA%D7%9B%D7%A9%D7%99%D7%A8%D7%99%D7%9D-%D7%95%D7%90%D7%91%D7%99%D7%96%D7%A8%D7%99%D7%9D-%D7%9C%D7%92%D7%99%D7%9C%D7%95%D7%97",
#             "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10829/%D7%9E%D7%A9%D7%97%D7%95%D7%AA-%D7%A9%D7%99%D7%A0%D7%99%D7%99%D7%9D-%D7%95%D7%9E%D7%99-%D7%A4%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10830/%D7%9E%D7%91%D7%A8%D7%A9%D7%95%D7%AA-%D7%A9%D7%99%D7%A0%D7%99%D7%99%D7%9D-%D7%95%D7%90%D7%91%D7%99%D7%96%D7%A8%D7%99%D7%9D-%D7%93%D7%A0%D7%98%D7%9C%D7%99%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10831/%D7%A7%D7%95%D7%A1%D7%9E%D7%98%D7%99%D7%A7%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97-%D7%94%D7%A4%D7%A0%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10832/%D7%98%D7%99%D7%A4%D7%95%D7%97-%D7%95%D7%A2%D7%99%D7%A6%D7%95%D7%91-%D7%A9%D7%99%D7%A2%D7%A8",
#             "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/11277/%D7%A6%D7%91%D7%A2%D7%99-%D7%A9%D7%99%D7%A2%D7%A8",
#             "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10947/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%A0%D7%A9%D7%99%D7%AA-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%A1%D7%A4%D7%99%D7%92%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/11200/%D7%90%D7%91%D7%99%D7%96%D7%A8%D7%99-%D7%98%D7%99%D7%A4%D7%95%D7%97",
#             "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/11201/%D7%98%D7%99%D7%A4%D7%95%D7%97-%D7%94%D7%92%D7%95%D7%A3",
#             "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/11202/%D7%A2%D7%96%D7%A8%D7%94-%D7%A8%D7%90%D7%A9%D7%95%D7%A0%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/11776/%D7%95%D7%99%D7%98%D7%9E%D7%99%D7%A0%D7%99%D7%9D-%D7%95%D7%AA%D7%95%D7%A1%D7%A4%D7%99-%D7%AA%D7%96%D7%95%D7%A0%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/11219/%D7%A0%D7%99%D7%99%D7%A8-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%95",
#             "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10813/%D7%A0%D7%99%D7%A7%D7%95%D7%99-%D7%9B%D7%91%D7%99%D7%A1%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10814/%D7%9E%D7%A8%D7%9B%D7%9A-%D7%9B%D7%91%D7%99%D7%A1%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10815/%D7%9E%D7%A1%D7%99%D7%A8%D7%99-%D7%9B%D7%AA%D7%9E%D7%99%D7%9D-%D7%95%D7%A2%D7%96%D7%A8%D7%99-%D7%9B%D7%91%D7%99%D7%A1%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10816/%D7%A0%D7%99%D7%A7%D7%95%D7%99-%D7%9B%D7%9C%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10817/%D7%A0%D7%99%D7%A7%D7%95%D7%99-%D7%9E%D7%98%D7%91%D7%97",
#             "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10818/%D7%A0%D7%99%D7%A7%D7%95%D7%99-%D7%9B%D7%9C%D7%9C%D7%99",
#             "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10819/%D7%A0%D7%99%D7%A7%D7%95%D7%99-%D7%A8%D7%A6%D7%A4%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10820/%D7%A0%D7%99%D7%A7%D7%95%D7%99-%D7%90%D7%9E%D7%91%D7%98%D7%99%D7%94-%D7%95%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/11199/%D7%94%D7%93%D7%91%D7%A8%D7%94-%D7%95%D7%90%D7%99%D7%A0%D7%A1%D7%98%D7%9C%D7%A6%D7%99%D7%94",
#             "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10822/%D7%91%D7%99%D7%A9%D7%95%D7%9D-%D7%90%D7%95%D7%95%D7%99%D7%A8",
#             "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10946/%D7%90%D7%91%D7%99%D7%96%D7%A8%D7%99-%D7%A0%D7%99%D7%A7%D7%95%D7%99",
#             "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/11218/%D7%A6%D7%97%D7%A6%D7%95%D7%97-%D7%A0%D7%A2%D7%9C%D7%99%D7%99%D7%9D",
#             "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/11269/%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%9D-%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99%D7%99%D7%9D-%D7%9C%D7%90%D7%99%D7%A8%D7%95%D7%97"
#         ],
#         "selectors": {
#             "category": "catalog",
#             "product": ".product-info[role='link']",
#             "name": ".title",
#             "price": ".price-regular"
#         }
#     }
#     # {
#     #     "name": "יינות ביתן",
#     #     "id": "ybitan",
#     #     "url": "https://www.ybitan.co.il/",
#     #     "selectors": {
#     #         "category": ".category-item",
#     #         "product": "sp-product",
#     #         "name": ".name",
#     #         "price": ".sp-product-price"
#     #     }
#     # },
#     # {
#     #     "id": "tiv_taam",
#     #     "name": "טיב טעם",
#     #     "url": "https://www.tivtaam.co.il/categories/90066/products",
#     #     "selectors": {
#     #         "category": ".category-item",
#     #         "product": ".product-item",
#     #         "name": ".name",
#     #         "price": ".product-price"
#     #     }
#     # }
# ]
#
# # Set up logging
# logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
#
# class Database:
#     def __init__(self):
#         self.client = None
#         self.db = None
#         self.collection = None
#
#     def connect(self):
#         try:
#             self.client = pymongo.MongoClient(MONGODB_URI, serverSelectionTimeoutMS=5000)
#             self.client.server_info()
#             self.db = self.client[DATABASE_NAME]
#             self.collection = self.db[COLLECTION_NAME]
#             logging.info("Successfully connected to MongoDB")
#         except pymongo.errors.ServerSelectionTimeoutError as err:
#             logging.error(f"Failed to connect to MongoDB: {err}")
#             raise
#
#     def update_product(self, name, supermarket, price):
#         self.collection.update_one(
#             {"name": name},
#             {"$set": {
#                 f"prices.{supermarket}": price,
#                 "updatedAt": datetime.now()
#             }},
#             upsert=True
#         )
#
#     def close(self):
#         if self.client:
#             self.client.close()
#
# class Scraper:
#     def __init__(self):
#         self.db = Database()
#         self.db.connect()
#         self.driver = self.setup_driver()
#
#     def setup_driver(self):
#         chrome_options = Options()
#         chrome_options.add_argument("--headless")
#         chrome_options.add_argument("--disable-gpu")
#         chrome_options.add_argument("--no-sandbox")
#         chrome_options.add_argument("--disable-service-workers")
#         chrome_options.add_argument("--disable-web-security")
#         chrome_options.add_argument("--disable-site-isolation-trials")
#         chrome_options.add_argument(f"user-agent={self.get_random_user_agent()}")
#         service = Service(CHROMEDRIVER_PATH)
#         driver = webdriver.Chrome(service=service, options=chrome_options)
#
#         def interceptor(request):
#             if request.url.endswith('sw.js'):
#                 request.abort()
#
#         driver.request_interceptor = interceptor
#
#         return driver
#
#     def get_random_user_agent(self):
#         return random.choice(USER_AGENTS)
#
#     def scroll_page(self):
#         last_height = self.driver.execute_script("return document.body.scrollHeight")
#         while True:
#             self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
#             time.sleep(2)  # Wait for page to load
#             new_height = self.driver.execute_script("return document.body.scrollHeight")
#             if new_height == last_height:
#                 break
#             last_height = new_height
#
#     def get_page_content(self, url, superMarketId):
#         try:
#             self.driver.get(url)
#
#             # Wait until Hatzi Hinam's loader disappears from the page.
#             if superMarketId == "hatzi_hinam":
#                 (WebDriverWait(self.driver, 10)
#                  .until(EC.invisibility_of_element_located((By.CSS_SELECTOR, ".full-page-loader"))))
#
#             if superMarketId == "tiv_taam":
#                 ((WebDriverWait(self.driver, 10))
#                  .until(EC.presence_of_element_located((By.CSS_SELECTOR, ".product-item"))))
#
#             if superMarketId == "viktory":
#                 ((WebDriverWait(self.driver, 10))
#                  .until(EC.presence_of_element_located((By.CSS_SELECTOR, ".item"))))
#
#             WebDriverWait(self.driver, 20).until(EC.presence_of_element_located((By.TAG_NAME, "body")))
#             # Scroll the page to load all products
#             self.scroll_page()
#             return self.driver.page_source
#         except Exception as e:
#             logging.error(f"Error fetching {url}: {e}")
#             return None
#
#     def scrape_category(self, supermarket, category_url):
#         logging.info(f"Scraping category: {category_url}")
#         content = self.get_page_content(category_url, supermarket['id'])
#         if not content:
#             return
#
#         soup = BeautifulSoup(content, 'html.parser')
#         products = soup.select(supermarket['selectors']['product'])
#
#         for product in products:
#             try:
#                 name_elem = product.select_one(supermarket['selectors']['name'])
#                 price_elem = product.select_one(supermarket['selectors']['price'])
#
#                 if not name_elem or not price_elem:
#                     logging.warning(f"Missing name or price element for a product in {supermarket['name']}")
#                     continue
#
#                 name = name_elem.text.strip()
#                 price_text = price_elem.text.strip()
#
#                 # New price parsing logic
#                 price_match = re.search(r'(\d+)\.?(\d{0,2})', price_text)
#                 if price_match:
#                     shekels = price_match.group(1)
#                     agorot = price_match.group(2).ljust(2, '0')
#                     price = float(f"{shekels}.{agorot}")
#                 else:
#                     logging.warning(f"Could not parse price for {name} in {supermarket['name']}")
#                     continue
#
#                 logging.info(f"Parsed product: Name: {name}, Price: {price}")
#
#                 self.db.update_product(name, supermarket['name'], price)
#                 logging.info(f"Updated price for {name} in {supermarket['name']}: ₪{price:.2f}")
#             except Exception as e:
#                 logging.error(f"Error parsing product in {supermarket['name']}: {e}")
#
#     # def scrape_prices(self):
#     #     for supermarket in SUPERMARKETS:
#     #         logging.info(f"Scraping {supermarket['name']}...")
#     #
#     #         content = self.get_page_content(supermarket['url'], supermarket['id'])
#     #         if not content:
#     #             continue
#     #
#     #         soup = BeautifulSoup(content, 'html.parser')
#     #         categories = soup.select(supermarket['selectors']['category'])
#     #
#     #         if not categories:
#     #             logging.warning(f"No categories found on {supermarket['url']}. Attempting to scrape products directly.")
#     #             self.scrape_category(supermarket, supermarket['url'])
#     #         else:
#     #             for category in categories:
#     #                 category_url = category.get('href')
#     #                 if category_url:
#     #                     if not category_url.startswith('http'):
#     #                         category_url = urljoin(supermarket['url'], category_url)
#     #                     self.scrape_category(supermarket, category_url)
#     #                 time.sleep(random.uniform(1, 3))  # Random delay between category requests
#     #
#     #         logging.info(f"Finished scraping {supermarket['name']}")
#     #         time.sleep(random.uniform(5, 10))  # Random delay between supermarkets
#     def scrape_prices(self):
#         for supermarket in SUPERMARKETS:
#             logging.info(f"Scraping {supermarket['name']}...")
#
#             for url in supermarket['urls']:
#                 logging.info(f"Scraping URL: {url}")
#                 content = self.get_page_content(url, supermarket['id'])
#                 if not content:
#                     continue
#
#                 soup = BeautifulSoup(content, 'html.parser')
#                 categories = soup.select(supermarket['selectors']['category'])
#
#                 if not categories:
#                     logging.warning(f"No categories found on {url}. Attempting to scrape products directly.")
#                     self.scrape_category(supermarket, url)
#                 else:
#                     for category in categories:
#                         category_url = category.get('href')
#                         if category_url:
#                             if not category_url.startswith('http'):
#                                 category_url = urljoin(url, category_url)
#                             self.scrape_category(supermarket, category_url)
#                         time.sleep(random.uniform(1, 3))  # Random delay between category requests
#
#                 time.sleep(random.uniform(3, 5))  # Random delay between URLs
#
#             logging.info(f"Finished scraping {supermarket['name']}")
#             time.sleep(random.uniform(5, 10))  # Random delay between supermarkets
#
#     def close(self):
#         self.db.close()
#         if self.driver:
#             self.driver.quit()
#
# def main():
#     scraper = Scraper()
#     try:
#         scraper.scrape_prices()
#     finally:
#         scraper.close()
#
# if __name__ == "__main__":
#     main()
#

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
import re

# Configuration
MONGODB_URI = "mongodb+srv://superezproject:ofoYnDHYWorlj2Pf@superez.v5ab25m.mongodb.net/"
DATABASE_NAME = "super_ez"
COLLECTION_NAME = "categorized_products"
CHROMEDRIVER_PATH = r"C:/Users/mayag/.wdm\drivers/chromedriver/win64/127.0.6533.72/chromedriver-win32/chromedriver.exe"  # Update this path

USER_AGENTS = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0'
]

SUPERMARKETS = [
    {
        "name": "רמי לוי",
        "id": "rami_levi",
        "categories": [
            {
                "name": "ירקות ופירות טריים",
                "urls": [
                    "https://www.rami-levy.co.il/he/online/market/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA/%D7%99%D7%A8%D7%A7%D7%95%D7%AA",
                    "https://www.rami-levy.co.il/he/online/market/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA/%D7%A4%D7%99%D7%A8%D7%95%D7%AA"
                ]
            },
            {
                "name": "פירות יבשים, פיצוחים ואגוזים",
                "urls": [
                    "https://www.rami-levy.co.il/he/online/market/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA/%D7%A4%D7%99%D7%A6%D7%95%D7%97%D7%99%D7%9D"
                ]
            },
            {
                "name": "תבלינים",
                "urls": [
                    "https://www.rami-levy.co.il/he/online/market/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D-%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%90%D7%A4%D7%99%D7%94/%D7%AA%D7%91%D7%9C%D7%99%D7%A0%D7%99%D7%9D"
                ]
            },
            {
                "name": "מוצרי חלב, תחליפים וביצים",
                "urls": [
                    "https://www.rami-levy.co.il/he/online/market/%D7%97%D7%9C%D7%91-%D7%91%D7%99%D7%A6%D7%99%D7%9D-%D7%95%D7%A1%D7%9C%D7%98%D7%99%D7%9D/%D7%97%D7%9C%D7%91",
                    "https://www.rami-levy.co.il/he/online/market/%D7%97%D7%9C%D7%91-%D7%91%D7%99%D7%A6%D7%99%D7%9D-%D7%95%D7%A1%D7%9C%D7%98%D7%99%D7%9D/%D7%91%D7%99%D7%A6%D7%99%D7%9D",
                    "https://www.rami-levy.co.il/he/online/market/%D7%97%D7%9C%D7%91-%D7%91%D7%99%D7%A6%D7%99%D7%9D-%D7%95%D7%A1%D7%9C%D7%98%D7%99%D7%9D/%D7%92%D7%91%D7%99%D7%A0%D7%95%D7%AA",
                    "https://www.rami-levy.co.il/he/online/market/%D7%97%D7%9C%D7%91-%D7%91%D7%99%D7%A6%D7%99%D7%9D-%D7%95%D7%A1%D7%9C%D7%98%D7%99%D7%9D/%D7%97%D7%9E%D7%90%D7%94-%D7%9E%D7%A8%D7%92%D7%A8%D7%99%D7%A0%D7%94-%D7%A9%D7%9E%D7%A0%D7%AA",
                    "https://www.rami-levy.co.il/he/online/market/%D7%97%D7%9C%D7%91-%D7%91%D7%99%D7%A6%D7%99%D7%9D-%D7%95%D7%A1%D7%9C%D7%98%D7%99%D7%9D/%D7%99%D7%95%D7%92%D7%95%D7%A8%D7%98-%D7%95%D7%9E%D7%A2%D7%93%D7%A0%D7%99-%D7%97%D7%9C%D7%91",
                    "https://www.rami-levy.co.il/he/online/market/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%95%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA/%D7%AA%D7%97%D7%9C%D7%99%D7%A4%D7%99-%D7%92%D7%91%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%95%D7%A4%D7%95"
                ]
            },
            {
                "name": "סלטים רטבים וממרחים",
                "urls": [
                    "https://www.rami-levy.co.il/he/online/market/%D7%97%D7%9C%D7%91-%D7%91%D7%99%D7%A6%D7%99%D7%9D-%D7%95%D7%A1%D7%9C%D7%98%D7%99%D7%9D/%D7%A1%D7%9C%D7%98%D7%99%D7%9D",
                    "https://www.rami-levy.co.il/he/online/market/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D-%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%90%D7%A4%D7%99%D7%94/%D7%A8%D7%98%D7%91%D7%99%D7%9D",
                    "https://www.rami-levy.co.il/he/online/market/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D-%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%90%D7%A4%D7%99%D7%94/%D7%93%D7%91%D7%A9-%D7%A8%D7%99%D7%91%D7%94-%D7%95%D7%9E%D7%9E%D7%A8%D7%97%D7%99%D7%9D",


                ]
            },
            {
                "name": "עוף, בשר, נקניקים ודגים",
                "urls": [
                    "https://www.rami-levy.co.il/he/online/market/%D7%91%D7%A9%D7%A8-%D7%95%D7%93%D7%92%D7%99%D7%9D"
                ]
            },
            {
                "name": "אורגני ובריאות",
                "urls": [
                    "https://www.rami-levy.co.il/he/online/market/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%95%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA/%D7%9E%D7%96%D7%95%D7%9F-%D7%95%D7%AA%D7%95%D7%A1%D7%A4%D7%99%D7%9D-%D7%9C%D7%A1%D7%A4%D7%95%D7%A8%D7%98%D7%90%D7%99%D7%9D",
                    "https://www.rami-levy.co.il/he/online/market/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%95%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA/%D7%A0%D7%98%D7%95%D7%9C-%D7%95%D7%9E%D7%95%D7%A4%D7%97%D7%AA-%D7%A1%D7%95%D7%9B%D7%A8",
                    "https://www.rami-levy.co.il/he/online/market/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%95%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%95%D7%98%D7%91%D7%A2%D7%95%D7%A0%D7%99",
                    "https://www.rami-levy.co.il/he/online/market/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%95%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA/%D7%9C%D7%9C%D7%90-%D7%92%D7%9C%D7%95%D7%98%D7%9F",
                    "https://www.rami-levy.co.il/he/online/market/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%95%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA/%D7%A1%D7%95%D7%99%D7%94-%D7%95%D7%9C%D7%9C%D7%90-%D7%9C%D7%A7%D7%98%D7%95%D7%96"
                ]
            },
            {
                "name": "קפואים",
                "urls": [
                    "https://www.rami-levy.co.il/he/online/market/%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D"
                ]
            },
            {
                "name": "שימורים",
                "urls": [
                    "https://www.rami-levy.co.il/he/online/market/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D-%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%90%D7%A4%D7%99%D7%94/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D"
                ]
            },
            {
                "name": "אפייה ובישול",
                "urls": [
                    "https://www.rami-levy.co.il/he/online/market/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D-%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%90%D7%A4%D7%99%D7%94/%D7%A7%D7%9E%D7%97-%D7%95%D7%A4%D7%99%D7%A8%D7%95%D7%A8%D7%99-%D7%9C%D7%97%D7%9D",
                    "https://www.rami-levy.co.il/he/online/market/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D-%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%90%D7%A4%D7%99%D7%94/%D7%A9%D7%9E%D7%9F-%D7%97%D7%95%D7%9E%D7%A5-%D7%95%D7%9E%D7%99%D7%A5-%D7%9C%D7%99%D7%9E%D7%95%D7%9F",
                    "https://www.rami-levy.co.il/he/online/market/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D-%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%90%D7%A4%D7%99%D7%94/%D7%9E%D7%A8%D7%A7%D7%99%D7%9D-%D7%95%D7%AA%D7%91%D7%A9%D7%99%D7%9C%D7%99%D7%9D",
                    "https://www.rami-levy.co.il/he/online/market/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D-%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%90%D7%A4%D7%99%D7%94/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%90%D7%A4%D7%99%D7%94"
                ]
            },
            {
                "name": "אסייתי",
                "urls": [
                    "https://www.rami-levy.co.il/he/online/market/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D-%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%90%D7%A4%D7%99%D7%94/%D7%94%D7%9E%D7%98%D7%91%D7%97-%D7%94%D7%90%D7%A1%D7%99%D7%99%D7%90%D7%AA%D7%99"
                ]
            },
            {
                "name": "קטניות ודגנים",
                "urls": [
                    "https://www.rami-levy.co.il/he/online/market/%D7%97%D7%9C%D7%91-%D7%91%D7%99%D7%A6%D7%99%D7%9D-%D7%95%D7%A1%D7%9C%D7%98%D7%99%D7%9D/%D7%9E%D7%96%D7%95%D7%9F-%D7%9E%D7%A6%D7%95%D7%A0%D7%9F",
                    "https://www.rami-levy.co.il/he/online/market/%D7%A7%D7%98%D7%A0%D7%99%D7%95%D7%AA-%D7%95%D7%93%D7%92%D7%A0%D7%99%D7%9D"
                ]
            },
            {
                "name": "מתוקים וחטיפים",
                "urls": [
                    "https://www.rami-levy.co.il/he/online/market/%D7%97%D7%98%D7%99%D7%A4%D7%99%D7%9D-%D7%95%D7%9E%D7%AA%D7%95%D7%A7%D7%99%D7%9D"
                ]
            },
            {
                "name": "משקאות",
                "urls": [
                    "https://www.rami-levy.co.il/he/online/market/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA"
                ]
            },
            {
                "name": "אחזקת הבית ובעלי חיים",
                "urls": [
                    "https://www.rami-levy.co.il/he/online/market/%D7%90%D7%97%D7%96%D7%A7%D7%AA-%D7%94%D7%91%D7%99%D7%AA-%D7%95%D7%91%D7%A2-%D7%97"
                ]
            },
            {
                "name": "חד פעמי",
                "urls": [
                    "https://www.rami-levy.co.il/he/online/market/%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99-%D7%95%D7%9E%D7%AA%D7%9B%D7%9C%D7%94"
                ]
            },
            {
                "name": "פארם ותינוקות",
                "urls": [
                    "https://www.rami-levy.co.il/he/online/market/%D7%A4%D7%90%D7%A8%D7%9D-%D7%95%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA"
                ]
            }
        ],
        "selectors": {
            "category": ".category-item",
            "product": ".product-flex",
            "name": ".inner-text",
            "price": ".tag-price"
        }
    },
    {
        "name": "חצי חינם",
        "id": "hatzi_hinam",
        "categories": [
            {
                "name": "ירקות ופירות טריים",
                "urls": [
                    "https://shop.hazi-hinam.co.il/catalog/45/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA/10883/%D7%99%D7%A8%D7%A7%D7%95%D7%AA",
                    "https://shop.hazi-hinam.co.il/catalog/45/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA/10884/%D7%99%D7%A8%D7%A7%D7%95%D7%AA-%D7%90%D7%A8%D7%95%D7%96%D7%99%D7%9D-%D7%95%D7%9C%D7%A7%D7%98%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/45/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA/10885/%D7%A2%D7%A9%D7%91%D7%99-%D7%AA%D7%99%D7%91%D7%95%D7%9C--%D7%A0%D7%91%D7%98%D7%99%D7%9D-%D7%95%D7%A4%D7%98%D7%A8%D7%99%D7%95%D7%AA",
                    "https://shop.hazi-hinam.co.il/catalog/45/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA/10886/%D7%A4%D7%99%D7%A8%D7%95%D7%AA",
                    "https://shop.hazi-hinam.co.il/catalog/45/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA/10887/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%90%D7%A8%D7%95%D7%96%D7%99%D7%9D"
                ]
            },
            {
                "name": "פירות יבשים, פיצוחים ואגוזים",
                "urls": [
                    "https://shop.hazi-hinam.co.il/catalog/71/%D7%A4%D7%99%D7%A6%D7%95%D7%97%D7%99%D7%9D--%D7%AA%D7%91%D7%9C%D7%99%D7%A0%D7%99%D7%9D-%D7%95%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%99%D7%91%D7%A9%D7%99%D7%9D/10861/%D7%A4%D7%99%D7%A6%D7%95%D7%97%D7%99%D7%9D-%D7%90%D7%A8%D7%95%D7%96%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/71/%D7%A4%D7%99%D7%A6%D7%95%D7%97%D7%99%D7%9D--%D7%AA%D7%91%D7%9C%D7%99%D7%A0%D7%99%D7%9D-%D7%95%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%99%D7%91%D7%A9%D7%99%D7%9D/11139/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%99%D7%91%D7%A9%D7%99%D7%9D-%D7%90%D7%A8%D7%95%D7%96%D7%99%D7%9D",
                ]
            },
            {
                "name": "תבלינים",
                "urls": [
                    "https://shop.hazi-hinam.co.il/catalog/71/%D7%A4%D7%99%D7%A6%D7%95%D7%97%D7%99%D7%9D--%D7%AA%D7%91%D7%9C%D7%99%D7%A0%D7%99%D7%9D-%D7%95%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%99%D7%91%D7%A9%D7%99%D7%9D/10863/%D7%AA%D7%91%D7%9C%D7%99%D7%A0%D7%99%D7%9D-%D7%90%D7%A8%D7%95%D7%96%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/71/%D7%A4%D7%99%D7%A6%D7%95%D7%97%D7%99%D7%9D--%D7%AA%D7%91%D7%9C%D7%99%D7%A0%D7%99%D7%9D-%D7%95%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%99%D7%91%D7%A9%D7%99%D7%9D/11138/%D7%AA%D7%91%D7%9C%D7%99%D7%A0%D7%99%D7%9D-%D7%91%D7%9E%D7%A9%D7%A7%D7%9C"
                ]
            },
            {
                "name": "מוצרי חלב, תחליפים וביצים",
                "urls": [
                    "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/11211/%D7%97%D7%9C%D7%91-%D7%95%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%97%D7%9C%D7%91",
                    "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/10864/%D7%9E%D7%A2%D7%93%D7%A0%D7%99-%D7%99%D7%95%D7%92%D7%95%D7%A8%D7%98",
                    "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/11582/%D7%99%D7%95%D7%92%D7%95%D7%A8%D7%98-%D7%9C%D7%A9%D7%AA%D7%99%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/11486/%D7%9E%D7%A2%D7%93%D7%A0%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%A7%D7%99%D7%A0%D7%95%D7%97%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/10865/%D7%92%D7%91%D7%99%D7%A0%D7%95%D7%AA-%D7%A8%D7%9B%D7%95%D7%AA",
                    "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/10866/%D7%92%D7%91%D7%99%D7%A0%D7%95%D7%AA-%D7%97%D7%A6%D7%99-%D7%A7%D7%A9%D7%95%D7%AA",
                    "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/10867/%D7%92%D7%91%D7%99%D7%A0%D7%95%D7%AA-%D7%A6%D7%94%D7%95%D7%91%D7%95%D7%AA-%D7%95%D7%A7%D7%A9%D7%95%D7%AA",
                    "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/10868/%D7%97%D7%9E%D7%90%D7%94-%D7%95%D7%9E%D7%A8%D7%92%D7%A8%D7%99%D7%A0%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/10870/%D7%97%D7%9C%D7%91-%D7%95%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%97%D7%9C%D7%91-%D7%A2%D7%9E%D7%99%D7%93%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/10869/%D7%A9%D7%9E%D7%A0%D7%AA--%D7%A7%D7%A6%D7%A4%D7%AA--%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%90%D7%A4%D7%99%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/129/%D7%94%D7%A6%D7%9E%D7%97%D7%95%D7%A0%D7%99%D7%94/11436/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%A6%D7%9E%D7%97%D7%99%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/136/%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%9D-%D7%A2%D7%9D-%D7%97%D7%9C%D7%91%D7%95%D7%9F/11636/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%A2%D7%9D-%D7%97%D7%9C%D7%91%D7%95%D7%9F",
                    "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/11213/%D7%91%D7%99%D7%A6%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/78/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%97%D7%9C%D7%91-%D7%95%D7%91%D7%99%D7%A6%D7%99%D7%9D/11592/%D7%A4%D7%A1%D7%98%D7%95%D7%AA-%D7%9E%D7%A6%D7%95%D7%A0%D7%A0%D7%95%D7%AA",
                ]
            },
            {
                "name": "סלטים רטבים וממרחים",
                "urls": [
                    "https://shop.hazi-hinam.co.il/catalog/44/%D7%9E%D7%A2%D7%93%D7%A0%D7%99%D7%99%D7%AA-%D7%A1%D7%9C%D7%98%D7%99%D7%9D-%D7%95%D7%93%D7%92%D7%99%D7%9D/10896/%D7%A1%D7%9C%D7%98%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/44/%D7%9E%D7%A2%D7%93%D7%A0%D7%99%D7%99%D7%AA-%D7%A1%D7%9C%D7%98%D7%99%D7%9D-%D7%95%D7%93%D7%92%D7%99%D7%9D/10897/%D7%93%D7%92%D7%99%D7%9D-%D7%9E%D7%A2%D7%95%D7%A9%D7%A0%D7%99%D7%9D-%D7%95%D7%9B%D7%91%D7%95%D7%A9%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/63/%D7%A1%D7%9C%D7%98%D7%99%D7%9D-%D7%95%D7%A0%D7%A7%D7%A0%D7%99%D7%A7%D7%99%D7%9D-%D7%90%D7%A8%D7%95%D7%96%D7%99%D7%9D/11598/%D7%97%D7%95%D7%9E%D7%95%D7%A1-%D7%95%D7%98%D7%97%D7%99%D7%A0%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/63/%D7%A1%D7%9C%D7%98%D7%99%D7%9D-%D7%95%D7%A0%D7%A7%D7%A0%D7%99%D7%A7%D7%99%D7%9D-%D7%90%D7%A8%D7%95%D7%96%D7%99%D7%9D/10873/%D7%A1%D7%9C%D7%98%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/63/%D7%A1%D7%9C%D7%98%D7%99%D7%9D-%D7%95%D7%A0%D7%A7%D7%A0%D7%99%D7%A7%D7%99%D7%9D-%D7%90%D7%A8%D7%95%D7%96%D7%99%D7%9D/11577/%D7%A1%D7%9C%D7%98%D7%99-%D7%93%D7%92%D7%99%D7%9D-%D7%95%D7%93%D7%92%D7%99%D7%9D-%D7%9E%D7%A2%D7%95%D7%A9%D7%A0%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/77/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%90%D7%A4%D7%99%D7%94-%D7%95%D7%9E%D7%9E%D7%A8%D7%97%D7%99%D7%9D/10836/%D7%A8%D7%99%D7%91%D7%95%D7%AA-%D7%95%D7%9E%D7%A2%D7%93%D7%A0%D7%99-%D7%A4%D7%99%D7%A8%D7%95%D7%AA",
                    "https://shop.hazi-hinam.co.il/catalog/77/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%90%D7%A4%D7%99%D7%94-%D7%95%D7%9E%D7%9E%D7%A8%D7%97%D7%99%D7%9D/11203/%D7%97%D7%9C%D7%95%D7%95%D7%94--%D7%93%D7%91%D7%A9-%D7%95%D7%A1%D7%99%D7%9C%D7%90%D7%9F",
                    "https://shop.hazi-hinam.co.il/catalog/77/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%90%D7%A4%D7%99%D7%94-%D7%95%D7%9E%D7%9E%D7%A8%D7%97%D7%99%D7%9D/11204/%D7%9E%D7%9E%D7%A8%D7%97%D7%99%D7%9D-%D7%9E%D7%AA%D7%95%D7%A7%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/74/%D7%A4%D7%A1%D7%98%D7%94--%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%AA%D7%99%D7%91%D7%95%D7%9C/11539/%D7%98%D7%97%D7%99%D7%A0%D7%94-%D7%92%D7%95%D7%9C%D7%9E%D7%99%D7%AA",
                    "https://shop.hazi-hinam.co.il/catalog/74/%D7%A4%D7%A1%D7%98%D7%94--%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%AA%D7%99%D7%91%D7%95%D7%9C/11540/%D7%A7%D7%98%D7%A9%D7%95%D7%A4--%D7%9E%D7%99%D7%95%D7%A0%D7%96-%D7%95%D7%97%D7%A8%D7%93%D7%9C",
                    "https://shop.hazi-hinam.co.il/catalog/74/%D7%A4%D7%A1%D7%98%D7%94--%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%AA%D7%99%D7%91%D7%95%D7%9C/10840/%D7%9E%D7%9E%D7%A8%D7%97%D7%99%D7%9D-%D7%95%D7%A8%D7%98%D7%91%D7%99%D7%9D"

                ]
            },
            {
                "name": "עוף, בשר, נקניקים ודגים",
                "urls": [
                    "https://shop.hazi-hinam.co.il/catalog/63/%D7%A1%D7%9C%D7%98%D7%99%D7%9D-%D7%95%D7%A0%D7%A7%D7%A0%D7%99%D7%A7%D7%99%D7%9D-%D7%90%D7%A8%D7%95%D7%96%D7%99%D7%9D/10874/%D7%A0%D7%A7%D7%A0%D7%99%D7%A7%D7%99%D7%9D-%D7%95%D7%A4%D7%A1%D7%98%D7%A8%D7%9E%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/63/%D7%A1%D7%9C%D7%98%D7%99%D7%9D-%D7%95%D7%A0%D7%A7%D7%A0%D7%99%D7%A7%D7%99%D7%9D-%D7%90%D7%A8%D7%95%D7%96%D7%99%D7%9D/11573/%D7%A0%D7%A7%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%AA",
                    "https://shop.hazi-hinam.co.il/catalog/46/%D7%A7%D7%A6%D7%91%D7%99%D7%94/10888/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%A2%D7%95%D7%A3",
                    "https://shop.hazi-hinam.co.il/catalog/46/%D7%A7%D7%A6%D7%91%D7%99%D7%94/10889/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%94%D7%95%D7%93%D7%95",
                    "https://shop.hazi-hinam.co.il/catalog/46/%D7%A7%D7%A6%D7%91%D7%99%D7%94/10890/%D7%91%D7%A9%D7%A8-%D7%91%D7%A7%D7%A8-%D7%95%D7%9B%D7%91%D7%A9",
                    "https://shop.hazi-hinam.co.il/catalog/46/%D7%A7%D7%A6%D7%91%D7%99%D7%94/11771/%D7%91%D7%A9%D7%A8-%D7%91%D7%A7%D7%A8-%D7%95%D7%A2%D7%95%D7%A3-%D7%A7%D7%A4%D7%95%D7%90",
                    "https://shop.hazi-hinam.co.il/catalog/87/%D7%93%D7%92%D7%99%D7%94/11770/%D7%93%D7%92%D7%99%D7%9D-%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/82/%D7%9E%D7%A2%D7%93%D7%A0%D7%99%D7%99%D7%AA-%D7%A0%D7%A7%D7%A0%D7%99%D7%A7%D7%99%D7%9D/11141/%D7%A0%D7%A7%D7%A0%D7%99%D7%A7%D7%99%D7%9D-%D7%95%D7%A4%D7%A1%D7%98%D7%A8%D7%9E%D7%94"
                    "https://shop.hazi-hinam.co.il/catalog/87/%D7%93%D7%92%D7%99%D7%94/11233/%D7%93%D7%92%D7%99%D7%9D-%D7%98%D7%A8%D7%99%D7%99%D7%9D"
                ]
            },
            {
                "name": "אורגני ובריאות",
                "urls": [
                    "https://shop.hazi-hinam.co.il/catalog/129/%D7%94%D7%A6%D7%9E%D7%97%D7%95%D7%A0%D7%99%D7%94/11437/%D7%AA%D7%97%D7%9C%D7%99%D7%A4%D7%99-%D7%92%D7%91%D7%99%D7%A0%D7%94--%D7%9E%D7%A2%D7%93%D7%A0%D7%99%D7%9D-%D7%95%D7%A8%D7%98%D7%91%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/129/%D7%94%D7%A6%D7%9E%D7%97%D7%95%D7%A0%D7%99%D7%94/11438/%D7%98%D7%95%D7%A4%D7%95--%D7%A1%D7%99%D7%99%D7%98%D7%9F-%D7%95%D7%AA%D7%97%D7%9C%D7%99%D7%A4%D7%99-%D7%91%D7%A9%D7%A8",
                    "https://shop.hazi-hinam.co.il/catalog/129/%D7%94%D7%A6%D7%9E%D7%97%D7%95%D7%A0%D7%99%D7%94/11439/%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D-%D7%9E%D7%9F-%D7%94%D7%A6%D7%95%D7%9E%D7%97",
                    "https://shop.hazi-hinam.co.il/catalog/65/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%9C%D7%9C%D7%90-%D7%92%D7%9C%D7%95%D7%98%D7%9F-%D7%95%D7%9C%D7%9C%D7%90-%D7%AA%D7%95%D7%A1%D7%A4%D7%AA-%D7%A1%D7%95%D7%9B%D7%A8/10899/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99",
                    "https://shop.hazi-hinam.co.il/catalog/65/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%9C%D7%9C%D7%90-%D7%92%D7%9C%D7%95%D7%98%D7%9F-%D7%95%D7%9C%D7%9C%D7%90-%D7%AA%D7%95%D7%A1%D7%A4%D7%AA-%D7%A1%D7%95%D7%9B%D7%A8/11136/%D7%9C%D7%9C%D7%90-%D7%92%D7%9C%D7%95%D7%98%D7%9F",
                    "https://shop.hazi-hinam.co.il/catalog/65/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99-%D7%9C%D7%9C%D7%90-%D7%92%D7%9C%D7%95%D7%98%D7%9F-%D7%95%D7%9C%D7%9C%D7%90-%D7%AA%D7%95%D7%A1%D7%A4%D7%AA-%D7%A1%D7%95%D7%9B%D7%A8/11137/%D7%9C%D7%9C%D7%90-%D7%AA%D7%95%D7%A1%D7%A4%D7%AA-%D7%A1%D7%95%D7%9B%D7%A8",
                    "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/11776/%D7%95%D7%99%D7%98%D7%9E%D7%99%D7%A0%D7%99%D7%9D-%D7%95%D7%AA%D7%95%D7%A1%D7%A4%D7%99-%D7%AA%D7%96%D7%95%D7%A0%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/136/%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%9D-%D7%A2%D7%9D-%D7%97%D7%9C%D7%91%D7%95%D7%9F/11637/%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%9D-%D7%A2%D7%9D-%D7%97%D7%9C%D7%91%D7%95%D7%9F"
                ]
            },
            {
                "name": "קפואים",
                "urls": [
                    "https://shop.hazi-hinam.co.il/catalog/80/%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D/10877/%D7%99%D7%A8%D7%A7%D7%95%D7%AA-%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/80/%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D/10878/%D7%91%D7%A6%D7%A7%D7%99%D7%9D--%D7%A4%D7%99%D7%A6%D7%95%D7%AA-%D7%95%D7%9E%D7%90%D7%A4%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/80/%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D/10879/%D7%9E%D7%90%D7%9B%D7%9C%D7%99%D7%9D-%D7%9E%D7%95%D7%9B%D7%A0%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/80/%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D/10882/%D7%A2%D7%A9%D7%91%D7%99-%D7%AA%D7%99%D7%91%D7%95%D7%9C-%D7%95%D7%AA%D7%91%D7%9C%D7%99%D7%A0%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/80/%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D/10948/%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/80/%D7%A7%D7%A4%D7%95%D7%90%D7%99%D7%9D/11217/%D7%90%D7%A6%D7%91%D7%A2%D7%95%D7%AA-%D7%A9%D7%AA%D7%99%D7%94"
                ]
            },
            {
                "name": "שימורים",
                "urls": [
                    "https://shop.hazi-hinam.co.il/catalog/84/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D/11180/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99-%D7%99%D7%A8%D7%A7%D7%95%D7%AA",
                    "https://shop.hazi-hinam.co.il/catalog/84/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D/11181/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99-%D7%9E%D7%9C%D7%A4%D7%A4%D7%95%D7%A0%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/84/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D/11182/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99-%D7%96%D7%99%D7%AA%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/84/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D/11183/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99-%D7%A2%D7%92%D7%91%D7%A0%D7%99%D7%95%D7%AA",
                    "https://shop.hazi-hinam.co.il/catalog/84/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D/11184/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99-%D7%93%D7%92%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/84/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D/11185/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99-%D7%98%D7%95%D7%A0%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/84/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99%D7%9D/11186/%D7%A9%D7%99%D7%9E%D7%95%D7%A8%D7%99-%D7%A4%D7%99%D7%A8%D7%95%D7%AA"
                ]
            },
            {
                "name": "אפייה ובישול",
                "urls": [
                    "https://shop.hazi-hinam.co.il/catalog/69/%D7%93%D7%92%D7%A0%D7%99-%D7%91%D7%95%D7%A7%D7%A8--%D7%97%D7%98%D7%99%D7%A4%D7%99-%D7%93%D7%92%D7%A0%D7%99%D7%9D-%D7%95%D7%92%D7%A8%D7%A0%D7%95%D7%9C%D7%94/10841/%D7%93%D7%92%D7%A0%D7%99-%D7%91%D7%95%D7%A7%D7%A8",
                    "https://shop.hazi-hinam.co.il/catalog/69/%D7%93%D7%92%D7%A0%D7%99-%D7%91%D7%95%D7%A7%D7%A8--%D7%97%D7%98%D7%99%D7%A4%D7%99-%D7%93%D7%92%D7%A0%D7%99%D7%9D-%D7%95%D7%92%D7%A8%D7%A0%D7%95%D7%9C%D7%94/11205/%D7%97%D7%98%D7%99%D7%A4%D7%99-%D7%93%D7%92%D7%A0%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/69/%D7%93%D7%92%D7%A0%D7%99-%D7%91%D7%95%D7%A7%D7%A8--%D7%97%D7%98%D7%99%D7%A4%D7%99-%D7%93%D7%92%D7%A0%D7%99%D7%9D-%D7%95%D7%92%D7%A8%D7%A0%D7%95%D7%9C%D7%94/11206/%D7%92%D7%A8%D7%A0%D7%95%D7%9C%D7%94-%D7%95%D7%A9%D7%99%D7%91%D7%95%D7%9C%D7%AA-%D7%A9%D7%95%D7%A2%D7%9C",
                    "https://shop.hazi-hinam.co.il/catalog/74/%D7%A4%D7%A1%D7%98%D7%94--%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%AA%D7%99%D7%91%D7%95%D7%9C/10838/%D7%9E%D7%A8%D7%A7%D7%99%D7%9D--%D7%AA%D7%99%D7%91%D7%95%D7%9C-%D7%95%D7%AA%D7%91%D7%A9%D7%99%D7%9C%D7%99%D7%9D-%D7%9E%D7%94%D7%99%D7%A8%D7%99-%D7%94%D7%9B%D7%A0%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/72/%D7%A7%D7%98%D7%A0%D7%99%D7%95%D7%AA-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%99%D7%A1%D7%95%D7%93/10853/%D7%A9%D7%9E%D7%9F--%D7%A9%D7%9E%D7%9F-%D7%96%D7%99%D7%AA-%D7%95%D7%AA%D7%A8%D7%A1%D7%99%D7%A1%D7%99-%D7%A9%D7%9E%D7%9F",
                    "https://shop.hazi-hinam.co.il/catalog/72/%D7%A7%D7%98%D7%A0%D7%99%D7%95%D7%AA-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%99%D7%A1%D7%95%D7%93/10854/%D7%97%D7%95%D7%9E%D7%A5-%D7%95%D7%9E%D7%99%D7%A5-%D7%9C%D7%99%D7%9E%D7%95%D7%9F",
                    "https://shop.hazi-hinam.co.il/catalog/72/%D7%A7%D7%98%D7%A0%D7%99%D7%95%D7%AA-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%99%D7%A1%D7%95%D7%93/10856/%D7%A7%D7%9E%D7%97--%D7%9E%D7%9C%D7%97-%D7%95%D7%A1%D7%95%D7%9B%D7%A8",
                    "https://shop.hazi-hinam.co.il/catalog/72/%D7%A7%D7%98%D7%A0%D7%99%D7%95%D7%AA-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%99%D7%A1%D7%95%D7%93/11666/%D7%A4%D7%99%D7%A8%D7%95%D7%A8%D7%99-%D7%9C%D7%97%D7%9D"
                ]
            },
            {
                "name": "אסייתי",
                "urls": [
                    "https://shop.hazi-hinam.co.il/catalog/74/%D7%A4%D7%A1%D7%98%D7%94--%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%AA%D7%99%D7%91%D7%95%D7%9C/10857/%D7%90%D7%A1%D7%99%D7%99%D7%90%D7%AA%D7%99"
                ]
            },
            {
                "name": "קטניות ודגנים",
                "urls": [
                    "https://shop.hazi-hinam.co.il/catalog/74/%D7%A4%D7%A1%D7%98%D7%94--%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%AA%D7%99%D7%91%D7%95%D7%9C/10839/%D7%A4%D7%A1%D7%98%D7%94--%D7%90%D7%98%D7%A8%D7%99%D7%95%D7%AA-%D7%95%D7%A9%D7%A7%D7%93%D7%99-%D7%9E%D7%A8%D7%A7",
                    "https://shop.hazi-hinam.co.il/catalog/72/%D7%A7%D7%98%D7%A0%D7%99%D7%95%D7%AA-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%99%D7%A1%D7%95%D7%93/10855/%D7%A7%D7%98%D7%A0%D7%99%D7%95%D7%AA-%D7%90%D7%95%D7%A8%D7%96-%D7%95%D7%A7%D7%95%D7%A1%D7%A7%D7%95%D7%A1",
                    "https://shop.hazi-hinam.co.il/catalog/136/%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%9D-%D7%A2%D7%9D-%D7%97%D7%9C%D7%91%D7%95%D7%9F/11634/%D7%97%D7%98%D7%99%D7%A4%D7%99%D7%9D-%D7%A2%D7%9D-%D7%97%D7%9C%D7%91%D7%95%D7%9F",
                    "https://shop.hazi-hinam.co.il/catalog/67/%D7%9C%D7%97%D7%9E%D7%99%D7%9D--%D7%A2%D7%95%D7%92%D7%95%D7%AA-%D7%95%D7%A2%D7%95%D7%92%D7%99%D7%95%D7%AA/11237/%D7%9C%D7%97%D7%9D--%D7%97%D7%9C%D7%94--%D7%9C%D7%97%D7%9E%D7%A0%D7%99%D7%95%D7%AA--%D7%A4%D7%99%D7%AA%D7%95%D7%AA-%D7%95%D7%98%D7%95%D7%A8%D7%98%D7%99%D7%99%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/67/%D7%9C%D7%97%D7%9E%D7%99%D7%9D--%D7%A2%D7%95%D7%92%D7%95%D7%AA-%D7%95%D7%A2%D7%95%D7%92%D7%99%D7%95%D7%AA/10859/%D7%A4%D7%A8%D7%99%D7%9B%D7%99%D7%95%D7%AA--%D7%A6%D7%A0%D7%99%D7%9E%D7%99%D7%9D-%D7%95%D7%A7%D7%A8%D7%A7%D7%A8%D7%99%D7%9D",
                    
                ]
            },
            {
                "name": "מתוקים וחטיפים",
                "urls": [
                    "https://shop.hazi-hinam.co.il/catalog/66/%D7%9E%D7%9E%D7%AA%D7%A7%D7%99%D7%9D-%D7%95%D7%97%D7%98%D7%99%D7%A4%D7%99%D7%9D/10842/%D7%98%D7%91%D7%9C%D7%90%D7%95%D7%AA-%D7%A9%D7%95%D7%A7%D7%95%D7%9C%D7%93",
                    "https://shop.hazi-hinam.co.il/catalog/66/%D7%9E%D7%9E%D7%AA%D7%A7%D7%99%D7%9D-%D7%95%D7%97%D7%98%D7%99%D7%A4%D7%99%D7%9D/10843/%D7%97%D7%98%D7%99%D7%A4%D7%99-%D7%A9%D7%95%D7%A7%D7%95%D7%9C%D7%93",
                    "https://shop.hazi-hinam.co.il/catalog/66/%D7%9E%D7%9E%D7%AA%D7%A7%D7%99%D7%9D-%D7%95%D7%97%D7%98%D7%99%D7%A4%D7%99%D7%9D/10844/%D7%91%D7%95%D7%A0%D7%91%D7%95%D7%A0%D7%99%D7%99%D7%A8%D7%95%D7%AA",
                    "https://shop.hazi-hinam.co.il/catalog/66/%D7%9E%D7%9E%D7%AA%D7%A7%D7%99%D7%9D-%D7%95%D7%97%D7%98%D7%99%D7%A4%D7%99%D7%9D/11207/%D7%A1%D7%95%D7%9B%D7%A8%D7%99%D7%95%D7%AA-%D7%95%D7%9E%D7%A8%D7%A9%D7%9E%D7%9C%D7%95",
                    "https://shop.hazi-hinam.co.il/catalog/66/%D7%9E%D7%9E%D7%AA%D7%A7%D7%99%D7%9D-%D7%95%D7%97%D7%98%D7%99%D7%A4%D7%99%D7%9D/11583/%D7%9E%D7%A1%D7%98%D7%99%D7%A7%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/66/%D7%9E%D7%9E%D7%AA%D7%A7%D7%99%D7%9D-%D7%95%D7%97%D7%98%D7%99%D7%A4%D7%99%D7%9D/11208/%D7%97%D7%98%D7%99%D7%A4%D7%99%D7%9D-%D7%9E%D7%9C%D7%95%D7%97%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/66/%D7%9E%D7%9E%D7%AA%D7%A7%D7%99%D7%9D-%D7%95%D7%97%D7%98%D7%99%D7%A4%D7%99%D7%9D/11579/%D7%91%D7%99%D7%99%D7%92%D7%9C%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/67/%D7%9C%D7%97%D7%9E%D7%99%D7%9D--%D7%A2%D7%95%D7%92%D7%95%D7%AA-%D7%95%D7%A2%D7%95%D7%92%D7%99%D7%95%D7%AA/11485/%D7%A2%D7%95%D7%92%D7%99%D7%95%D7%AA--%D7%95%D7%95%D7%A4%D7%9C%D7%99%D7%9D--%D7%91%D7%99%D7%A1%D7%A7%D7%95%D7%95%D7%98%D7%99%D7%9D-%D7%95%D7%92%D7%91%D7%99%D7%A2%D7%99-%D7%92%D7%9C%D7%99%D7%93%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/67/%D7%9C%D7%97%D7%9E%D7%99%D7%9D--%D7%A2%D7%95%D7%92%D7%95%D7%AA-%D7%95%D7%A2%D7%95%D7%92%D7%99%D7%95%D7%AA/10847/%D7%A2%D7%95%D7%92%D7%95%D7%AA-%D7%95%D7%A2%D7%95%D7%92%D7%95%D7%AA-%D7%90%D7%99%D7%A9%D7%99%D7%95%D7%AA"
                ]
            },
            {
                "name": "משקאות",
                "urls": [
                    "https://shop.hazi-hinam.co.il/catalog/70/%D7%A7%D7%A4%D7%94--%D7%AA%D7%94-%D7%95%D7%90%D7%91%D7%A7%D7%95%D7%AA-%D7%A9%D7%AA%D7%99%D7%94/10845/%D7%A7%D7%A4%D7%94-%D7%95%D7%90%D7%91%D7%A7%D7%95%D7%AA-%D7%A9%D7%AA%D7%99%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/70/%D7%A7%D7%A4%D7%94--%D7%AA%D7%94-%D7%95%D7%90%D7%91%D7%A7%D7%95%D7%AA-%D7%A9%D7%AA%D7%99%D7%94/11595/%D7%A7%D7%A4%D7%A1%D7%95%D7%9C%D7%95%D7%AA-%D7%A7%D7%A4%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/70/%D7%A7%D7%A4%D7%94--%D7%AA%D7%94-%D7%95%D7%90%D7%91%D7%A7%D7%95%D7%AA-%D7%A9%D7%AA%D7%99%D7%94/10846/%D7%AA%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/70/%D7%A7%D7%A4%D7%94--%D7%AA%D7%94-%D7%95%D7%90%D7%91%D7%A7%D7%95%D7%AA-%D7%A9%D7%AA%D7%99%D7%94/11620/%D7%97%D7%9C%D7%99%D7%98%D7%95%D7%AA",
                    "https://shop.hazi-hinam.co.il/catalog/79/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/10852/%D7%9E%D7%99%D7%9D-%D7%95%D7%A1%D7%95%D7%93%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/79/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/11424/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%9E%D7%95%D7%92%D7%96%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/79/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/10851/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%A7%D7%9C%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/79/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/11210/%D7%AA%D7%A8%D7%9B%D7%99%D7%96%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/79/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/11209/%D7%91%D7%99%D7%A8%D7%94-%D7%95%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%90%D7%A0%D7%A8%D7%92%D7%99%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/79/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/10850/%D7%99%D7%99%D7%A0%D7%95%D7%AA"

                ]
            },
            {
                "name": "אחזקת הבית ובעלי חיים",
                "urls": [
                    "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/11219/%D7%A0%D7%99%D7%99%D7%A8-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%95",
                    "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10813/%D7%A0%D7%99%D7%A7%D7%95%D7%99-%D7%9B%D7%91%D7%99%D7%A1%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10814/%D7%9E%D7%A8%D7%9B%D7%9A-%D7%9B%D7%91%D7%99%D7%A1%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10815/%D7%9E%D7%A1%D7%99%D7%A8%D7%99-%D7%9B%D7%AA%D7%9E%D7%99%D7%9D-%D7%95%D7%A2%D7%96%D7%A8%D7%99-%D7%9B%D7%91%D7%99%D7%A1%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10816/%D7%A0%D7%99%D7%A7%D7%95%D7%99-%D7%9B%D7%9C%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10817/%D7%A0%D7%99%D7%A7%D7%95%D7%99-%D7%9E%D7%98%D7%91%D7%97",
                    "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10818/%D7%A0%D7%99%D7%A7%D7%95%D7%99-%D7%9B%D7%9C%D7%9C%D7%99",
                    "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10819/%D7%A0%D7%99%D7%A7%D7%95%D7%99-%D7%A8%D7%A6%D7%A4%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10820/%D7%A0%D7%99%D7%A7%D7%95%D7%99-%D7%90%D7%9E%D7%91%D7%98%D7%99%D7%94-%D7%95%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/11199/%D7%94%D7%93%D7%91%D7%A8%D7%94-%D7%95%D7%90%D7%99%D7%A0%D7%A1%D7%98%D7%9C%D7%A6%D7%99%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10822/%D7%91%D7%99%D7%A9%D7%95%D7%9D-%D7%90%D7%95%D7%95%D7%99%D7%A8",
                    "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/10946/%D7%90%D7%91%D7%99%D7%96%D7%A8%D7%99-%D7%A0%D7%99%D7%A7%D7%95%D7%99",
                    "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/11218/%D7%A6%D7%97%D7%A6%D7%95%D7%97-%D7%A0%D7%A2%D7%9C%D7%99%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/11269/%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%9D-%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99%D7%99%D7%9D-%D7%9C%D7%90%D7%99%D7%A8%D7%95%D7%97",
                    "https://shop.hazi-hinam.co.il/catalog/128/%D7%9E%D7%96%D7%95%D7%9F-%D7%95%D7%A6%D7%99%D7%95%D7%93-%D7%9C%D7%91%D7%A2%D7%9C%D7%99-%D7%97%D7%99%D7%99%D7%9D/11410/%D7%9E%D7%96%D7%95%D7%9F-%D7%9C%D7%97%D7%AA%D7%95%D7%9C%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/128/%D7%9E%D7%96%D7%95%D7%9F-%D7%95%D7%A6%D7%99%D7%95%D7%93-%D7%9C%D7%91%D7%A2%D7%9C%D7%99-%D7%97%D7%99%D7%99%D7%9D/11411/%D7%9E%D7%96%D7%95%D7%9F-%D7%9C%D7%9B%D7%9C%D7%91%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/128/%D7%9E%D7%96%D7%95%D7%9F-%D7%95%D7%A6%D7%99%D7%95%D7%93-%D7%9C%D7%91%D7%A2%D7%9C%D7%99-%D7%97%D7%99%D7%99%D7%9D/11412/%D7%A6%D7%99%D7%95%D7%93-%D7%9C%D7%91%D7%A2%D7%9C%D7%99-%D7%97%D7%99%D7%99%D7%9D"
                ]
            },
            {
                "name": "חד פעמי",
                "urls": [
                    "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/11270/%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%9D-%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99%D7%99%D7%9D-%D7%9C%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%95%D7%90%D7%A4%D7%99%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/11271/%D7%A9%D7%A7%D7%99%D7%95%D7%AA-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%90%D7%A8%D7%99%D7%96%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/64/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F/11272/%D7%A0%D7%A8%D7%95%D7%AA-%D7%95%D7%92%D7%A4%D7%A8%D7%95%D7%A8%D7%99%D7%9D"
                ]
            },
            {
                "name": "פארם ותינוקות",
                "urls": [
                    "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10824/%D7%A9%D7%9E%D7%A4%D7%95",
                    "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10825/%D7%9E%D7%A8%D7%9B%D7%9A",
                    "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10826/%D7%A1%D7%91%D7%95%D7%9F-%D7%A8%D7%97%D7%A6%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10827/%D7%93%D7%90%D7%95%D7%93%D7%95%D7%A8%D7%A0%D7%98-%D7%9C%D7%90%D7%99%D7%A9%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/11409/%D7%93%D7%90%D7%95%D7%93%D7%95%D7%A8%D7%A0%D7%98-%D7%9C%D7%92%D7%91%D7%A8",
                    "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/11599/%D7%94%D7%92%D7%A0%D7%94-%D7%9E%D7%94%D7%A9%D7%9E%D7%A9",
                    "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10828/%D7%AA%D7%9B%D7%A9%D7%99%D7%A8%D7%99%D7%9D-%D7%95%D7%90%D7%91%D7%99%D7%96%D7%A8%D7%99%D7%9D-%D7%9C%D7%92%D7%99%D7%9C%D7%95%D7%97",
                    "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10829/%D7%9E%D7%A9%D7%97%D7%95%D7%AA-%D7%A9%D7%99%D7%A0%D7%99%D7%99%D7%9D-%D7%95%D7%9E%D7%99-%D7%A4%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10830/%D7%9E%D7%91%D7%A8%D7%A9%D7%95%D7%AA-%D7%A9%D7%99%D7%A0%D7%99%D7%99%D7%9D-%D7%95%D7%90%D7%91%D7%99%D7%96%D7%A8%D7%99%D7%9D-%D7%93%D7%A0%D7%98%D7%9C%D7%99%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10831/%D7%A7%D7%95%D7%A1%D7%9E%D7%98%D7%99%D7%A7%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97-%D7%94%D7%A4%D7%A0%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10832/%D7%98%D7%99%D7%A4%D7%95%D7%97-%D7%95%D7%A2%D7%99%D7%A6%D7%95%D7%91-%D7%A9%D7%99%D7%A2%D7%A8",
                    "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/11277/%D7%A6%D7%91%D7%A2%D7%99-%D7%A9%D7%99%D7%A2%D7%A8",
                    "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/10947/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%A0%D7%A9%D7%99%D7%AA-%D7%95%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%A1%D7%A4%D7%99%D7%92%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/11200/%D7%90%D7%91%D7%99%D7%96%D7%A8%D7%99-%D7%98%D7%99%D7%A4%D7%95%D7%97",
                    "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/11201/%D7%98%D7%99%D7%A4%D7%95%D7%97-%D7%94%D7%92%D7%95%D7%A3",
                    "https://shop.hazi-hinam.co.il/catalog/68/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%94-%D7%95%D7%98%D7%99%D7%A4%D7%95%D7%97/11202/%D7%A2%D7%96%D7%A8%D7%94-%D7%A8%D7%90%D7%A9%D7%95%D7%A0%D7%94",
                    "https://shop.hazi-hinam.co.il/catalog/62/%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA-%D7%95%D7%A4%D7%A2%D7%95%D7%98%D7%95%D7%AA/10833/%D7%94%D7%99%D7%92%D7%99%D7%99%D7%A0%D7%AA-%D7%A4%D7%A2%D7%95%D7%98%D7%95%D7%AA",
                    "https://shop.hazi-hinam.co.il/catalog/62/%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA-%D7%95%D7%A4%D7%A2%D7%95%D7%98%D7%95%D7%AA/10834/%D7%9E%D7%96%D7%95%D7%9F-%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA",
                    "https://shop.hazi-hinam.co.il/catalog/62/%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA-%D7%95%D7%A4%D7%A2%D7%95%D7%98%D7%95%D7%AA/10812/%D7%97%D7%99%D7%AA%D7%95%D7%9C%D7%99%D7%9D-%D7%95%D7%9E%D7%92%D7%91%D7%95%D7%A0%D7%99%D7%9D",
                    "https://shop.hazi-hinam.co.il/catalog/62/%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA-%D7%95%D7%A4%D7%A2%D7%95%D7%98%D7%95%D7%AA/11179/%D7%90%D7%91%D7%99%D7%96%D7%A8%D7%99-%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%AA"
                ]
            }
        ],
        "selectors": {
            "category": "catalog",
            "product": ".product-info[role='link']",
            "name": ".title",
            "price": ".price-regular"
        }
    },
    {
        "name": "ויקטורי",
        "id": "viktory",
        "categories": [
            {
                "name": "ירקות ופירות טריים",
                "urls": [
                    "https://www.victoryonline.co.il/categories/79706/products",
                    "https://www.victoryonline.co.il/categories/79705/products"
                ]
            },
            {
                "name": "פירות יבשים, פיצוחים ואגוזים",
                "urls": [
                    "https://www.victoryonline.co.il/categories/79707/products"
                ]
            },
            {
                "name": "תבלינים",
                "urls": [
                    "https://www.victoryonline.co.il/categories/79621/products"
                ]
            },
            {
                "name": "מוצרי חלב, תחליפים וביצים",
                "urls": [
                    "https://www.victoryonline.co.il/categories/79720/products",
                    "https://www.victoryonline.co.il/categories/95010/products",
                    "https://www.victoryonline.co.il/categories/95012/products",
                    "https://www.victoryonline.co.il/categories/95011/products",
                    "https://www.victoryonline.co.il/categories/95809/products",
                    "https://www.victoryonline.co.il/categories/120930/products",
                    "https://www.victoryonline.co.il/categories/120936/products"

                ]
            },
            {
                "name": "סלטים רטבים וממרחים",
                "urls": [
                    "https://www.victoryonline.co.il/categories/79623/products",
                    "https://www.victoryonline.co.il/categories/79620/products",
                    "https://www.victoryonline.co.il/categories/79605/products"

                ]
            },
            {
                "name": "עוף, בשר, נקניקים ודגים",
                "urls": [
                    "https://www.victoryonline.co.il/categories/79822/products",
                    "https://www.victoryonline.co.il/categories/93709/products",
                    "https://www.victoryonline.co.il/categories/79823/products",
                    "https://www.victoryonline.co.il/categories/93710/products",
                    "https://www.victoryonline.co.il/categories/79824/products",
                    "https://www.victoryonline.co.il/categories/79604/products"
                ]
            },
            {
                "name": "אורגני ובריאות",
                "urls": [
                    "https://www.victoryonline.co.il/categories/79840/products",
                    "https://www.victoryonline.co.il/categories/94568/products",
                    "https://www.victoryonline.co.il/categories/87293/products",
                    "https://www.victoryonline.co.il/categories/94589/products"
                ]
            },
            {
                "name": "קפואים",
                "urls": [
                    "https://www.victoryonline.co.il/categories/95013/products",
                    "https://www.victoryonline.co.il/categories/95816/products",
                    "https://www.victoryonline.co.il/categories/95824/products",
                    "https://www.victoryonline.co.il/categories/95828/products",
                    "https://www.victoryonline.co.il/categories/79592/products"
                ]
            },
            {
                "name": "שימורים",
                "urls": [
                    "https://www.victoryonline.co.il/categories/79623/products"
                ]
            },
            {
                "name": "אפייה ובישול",
                "urls": [
                    "https://www.victoryonline.co.il/categories/79624/products",
                    "https://www.victoryonline.co.il/categories/79622/products"
                ]
            },
            {
                "name": "קטניות ודגנים",
                "urls": [
                    "https://www.victoryonline.co.il/categories/79689/products",
                    "https://www.victoryonline.co.il/categories/79690/products",
                    "https://www.victoryonline.co.il/categories/79732/products",
                    "https://www.victoryonline.co.il/categories/79733/products",
                    "https://www.victoryonline.co.il/categories/95814/products"
                ]
            },
            {
                "name": "מתוקים וחטיפים",
                "urls": [
                    "https://www.victoryonline.co.il/categories/79688/products",
                    "https://www.victoryonline.co.il/categories/79654/products",
                    "https://www.victoryonline.co.il/categories/79655/products"

                ]
            },
            {
                "name": "משקאות",
                "urls": [
                    "https://www.victoryonline.co.il/categories/79670/products",
                    "https://www.victoryonline.co.il/categories/79668/products",
                    "https://www.victoryonline.co.il/categories/79669/products"
                ]
            },
            {
                "name": "אחזקת הבית ובעלי חיים",
                "urls": [
                    "https://www.victoryonline.co.il/categories/79742/products",
                    "https://www.victoryonline.co.il/categories/79744/products",
                    "https://www.victoryonline.co.il/categories/79741/products",
                    "https://www.victoryonline.co.il/categories/79743/products",
                    "https://www.victoryonline.co.il/categories/79768/products",
                    "https://www.victoryonline.co.il/categories/79768/products",
                    "https://www.victoryonline.co.il/categories/79767/products",
                    "https://www.victoryonline.co.il/categories/79770/products"
                ]
            },
            {
                "name": "חד פעמי",
                "urls": [
                    "https://www.victoryonline.co.il/categories/79769/products"
                ]
            },
            {
                "name": "פארם ותינוקות",
                "urls": [
                    "https://www.victoryonline.co.il/categories/79572/products",
                    "https://www.victoryonline.co.il/categories/95186/products",
                    "https://www.victoryonline.co.il/categories/79574/products",
                    "https://www.victoryonline.co.il/categories/79573/products",
                    "https://www.victoryonline.co.il/categories/95797/products",
                    "https://www.victoryonline.co.il/categories/95798/products"
                ]
            }
        ],
        "selectors": {
            "category": ".category-menu-item",
            "product": "sp-product",
            "name": ".name",
            "price": ".price"
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

    def update_product(self, name, supermarket, price, category):
        self.collection.update_one(
            {"name": name, "category": category},
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

    def scroll_page(self):
        last_height = self.driver.execute_script("return document.body.scrollHeight")
        while True:
            self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(2)  # Wait for page to load
            new_height = self.driver.execute_script("return document.body.scrollHeight")
            if new_height == last_height:
                break
            last_height = new_height

    def get_page_content(self, url, superMarketId):
        try:
            self.driver.get(url)

            # Wait until Hatzi Hinam's loader disappears from the page.
            if superMarketId == "hatzi_hinam":
                (WebDriverWait(self.driver, 10)
                 .until(EC.invisibility_of_element_located((By.CSS_SELECTOR, ".full-page-loader"))))

            if superMarketId == "viktory":
                ((WebDriverWait(self.driver, 10))
                 .until(EC.presence_of_element_located((By.CSS_SELECTOR, ".item"))))

            WebDriverWait(self.driver, 20).until(EC.presence_of_element_located((By.TAG_NAME, "body")))
            # Scroll the page to load all products
            self.scroll_page()
            return self.driver.page_source
        except Exception as e:
            logging.error(f"Error fetching {url}: {e}")
            return None

    def scrape_category(self, supermarket, category_url, category_name):
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

                price_match = re.search(r'(\d+)\.?(\d{0,2})', price_text)
                if price_match:
                    shekels = price_match.group(1)
                    agorot = price_match.group(2).ljust(2, '0')
                    price = float(f"{shekels}.{agorot}")
                else:
                    logging.warning(f"Could not parse price for {name} in {supermarket['name']}")
                    continue

                logging.info(f"Parsed product: Name: {name}, Price: {price}, Category: {category_name}")

                self.db.update_product(name, supermarket['name'], price, category_name)
                logging.info(f"Updated price for {name} in {supermarket['name']}: ₪{price:.2f}")
            except Exception as e:
                logging.error(f"Error parsing product in {supermarket['name']}: {e}")

    def scrape_prices(self):
        for supermarket in SUPERMARKETS:
            logging.info(f"Scraping {supermarket['name']}...")

            for category in supermarket['categories']:
                category_name = category['name']
                for url in category['urls']:
                    logging.info(f"Scraping URL: {url} for category: {category_name}")
                    content = self.get_page_content(url, supermarket['id'])
                    if not content:
                        continue

                    self.scrape_category(supermarket, url, category_name)
                    time.sleep(random.uniform(1, 3))  # Random delay between URLs

                time.sleep(random.uniform(3, 5))  # Random delay between categories

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
