import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './comparingCarts.css';

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

  return (
    <div className="comparing-carts-container">
      <h1 className="result-header">:תוצאה</h1>
      {error && <div className="error-message">{error}</div>}
      <div className="cart-columns">
        {superCarts.map((cart: any, index: number) => (
          <div key={index} className="cart-row">
            <div className="cart-content">
              <h2 className="cart-header">{cart.name}</h2>
              <p className="cart-total">מחיר מלא: {cart.totalPrice}</p>
            </div>
            <button
              className="order-btn"
              onClick={() => handleOrder(cart)}
              disabled={isLoading}
            >
              {isLoading ? 'מעבד...' : 'להזמנה'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparingCarts;