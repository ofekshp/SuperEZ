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
  const { superCarts, missingProducts , client_info } = location.state || {};
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
          scriptPath = 'scraper/victoryScraper.py';
          break;
        case 'חצי חינם':
          scriptPath = 'scraper/hatziHinamScraper.py';
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

  const getDeliveryPrice = (cartName: string) => {
    switch (cartName) {
      case 'רמי לוי': // Rami Levi
        return 29.90; 
      case 'ויקטורי': // Victory
        return 30.00; 
      case 'חצי חינם': // Hazi-Hinam
        return 29.00; 
      case 'טיב טעם': // Tiv Taam
        return 29.9; 
      default:
        return 0;
    }
  };

  const getLogo = (cartName: string) => {
    switch (cartName) {
      case 'רמי לוי': // Rami Levi
        return importImage('RamiLevi.png');
      case 'ויקטורי': // Victory
        return importImage('Victory.png');
      case 'חצי חינם': // Hazi-Hinam
        return importImage('HaziHinam.png');
      case 'טיב טעם': // Hazi-Hinam
        return importImage('TivTaam.png');  
      default:
        return null;
    }
  };

  const renderMissingProducts = (cartName: string) => {
    const myMissingProducts = missingProducts.find((item) => item.name === cartName);
    if (!myMissingProducts || myMissingProducts.products.length === 0) {
      return 'אין חוסרים';
    }
    return myMissingProducts.products.map((p) => p.name).join(', ');
  };

  return (
    <div className="comparing-carts-container">
      <h1 className="result-header">:תוצאה</h1>
      {error && <div className="error-message">{error}</div>}
      <div className="cart-column">
        {superCarts.map((cart: any) => {
          var deliveryPrice = getDeliveryPrice(cart.name);
          if(cart.name === 'טיב טעם' && cart.totalPrice >= 750 ){
            deliveryPrice = 0;
          }
          const totalWithDelivery = cart.totalPrice + deliveryPrice;
          const logo = getLogo(cart.name);
          
          return (
            <div key={cart.name} className="cart-row">
              <div className="cart-content">
                {logo && <img src={logo} alt={`${cart.name} Logo`} className="cart-logo" />}
                <h2 className="cart-header">{cart.name}</h2>
                <div>
                <p className="cart-missingProducts">:מוצרים חסרים</p>
                <p className="cart-missingProducts-list">{renderMissingProducts(cart.name)}</p>
                </div>
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