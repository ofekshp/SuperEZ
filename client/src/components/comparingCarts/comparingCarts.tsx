import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './comparingCarts.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Supers/${imageName}`);
  } catch (error) {
    return null;
  }
};

const ComparingCarts: React.FC = () => {
  const location = useLocation();
  const { superCarts, client_info } = location.state || {};
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const execAsync = async (scriptPath: string, inputData: string): Promise<{ stdout: string, stderr: string }> => {
    try {
      const response = await axios.post('http://localhost:3001/api/run-scraper', { scriptPath, inputData });
      return response.data;
    } catch (error) {
      console.error('Error calling API:', error);
      throw error;
    }
  };

  const handleOrder = async (cart: any) => {
    setIsLoading(true);
    setError(null);
    try {
      let scriptPath;
      switch (cart.name) {
        case 'רמי לוי':
          scriptPath = 'scraper/ramiLeviScraper.py';
          break;
        case 'ויקטורי':
          scriptPath = 'scraper/victory_scraper.py';
          break;
        case 'חצי חינם':
          scriptPath = 'scraper/hatzi_hinam_scraper.py';
          break;
        default:
          throw new Error('Invalid supermarket');
      }

      const inputData = JSON.stringify({
        products: cart.products,
        clientInfo: client_info
      });

      const { stdout, stderr } = await execAsync(scriptPath, inputData);

      if (stderr) {
        console.error('Stderr:', stderr);
        throw new Error('Scraper script encountered an error');
      }

      const result = JSON.parse(stdout);
      if (result.finalUrl) {
        window.open(result.finalUrl, '_blank');
      } else {
        throw new Error('Scraper failed to return a final URL');
      }
    } catch (error) {
      console.error('Error running scraper:', error);
      setError('Failed to run the scraper. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getDeliveryPrice = (index: number) => {
    switch (index) {
      case 0: // Rami Levi
        return 29.90; 
      case 1: // Victory
        return 30.00; 
      case 2: // Hazi-Hinam
        return 29.00; 
      default:
        return 0;
    }
  };

  const getLogo = (index: number) => {
    switch (index) {
      case 0: // Rami Levi
        return importImage('RamiLevi.png');
      case 1: // Victory
        return importImage('Victory.png');
      case 2: // Hazi-Hinam
        return importImage('HaziHinam.png');
      default:
        return null;
    }
  };

  return (
    <div className="comparing-carts-container">
      <h1 className="result-header">:תוצאה</h1>
      {error && <div className="error-message">{error}</div>}
      <div className="cart-column">
        {superCarts.map((cart: any, index: number) => {
          const deliveryPrice = getDeliveryPrice(index);
          const totalWithDelivery = cart.totalPrice + deliveryPrice;
          const logo = getLogo(index);
          
          return (
            <div key={index} className="cart-row">
              <div className="cart-content">
                {logo && <img src={logo} alt={`${cart.name} Logo`} className="cart-logo" />}
                <h2 className="cart-header">{cart.name}</h2>
                <p className="cart-price">מחיר סל: {cart.totalPrice.toFixed(2)}</p>
                <p className="delivery-price">דמי משלוח: {deliveryPrice}</p>
                <p className="total-price">סה"כ לתשלום: {totalWithDelivery.toFixed(2)}</p>
              </div>
              <button
              className="order-btn"
              onClick={() => handleOrder(cart)}
              disabled={isLoading}
              >
              {isLoading ? 'מעבד...' : 'להזמנה'}
            </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComparingCarts;