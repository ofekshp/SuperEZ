import schedule
import time
from scraper import scrape_prices

def job():
    print("Running price scraper...")
    scrape_prices()
    print("Price scraping completed.")

schedule.every().day.at("02:00").do(job)

if __name__ == "__main__":
    print("Price scraper scheduler started.")
    while True:
        schedule.run_pending()
        time.sleep(1)