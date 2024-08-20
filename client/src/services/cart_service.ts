import axios from 'axios';



interface Product {
    name: string;
    quantity: number;
    id: number;
  }
  interface Cart {
    date: string;
    products: Product[];
  }
  
  class CartService {
    private basketProducts: Product[];
  
    constructor() {
      const savedBasket = localStorage.getItem('basketProducts');
      try {
        this.basketProducts = savedBasket ? JSON.parse(savedBasket) : [];
      } catch (e) {
        console.error('Error parsing saved basket:', e);
        this.basketProducts = [];
      }
    }
  
    saveBasket() {
      localStorage.setItem('basketProducts', JSON.stringify(this.basketProducts));
    }
  
    async addProduct(product: Product) {
      const existingProductIndex = this.basketProducts.findIndex(p => p.name === product.name);
        if (existingProductIndex > -1) {
          this.basketProducts[existingProductIndex] = {
            ...this.basketProducts[existingProductIndex],
            quantity: product.quantity,
          };
        } else {
          this.basketProducts.push(product);
        }
        this.saveBasket();
        return this.basketProducts;
  }

  
    async removeProduct(productName: string) {
        this.basketProducts = this.basketProducts.filter(product => product.name !== productName);
        this.saveBasket();
        return this.basketProducts;
    }
    
  
    async getBasketProducts() {
      this.saveBasket();
        return this.basketProducts;
    }

    async getCheapCart(myCart: Product[]) {
      const userId = localStorage.getItem('userId');
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const currentDate = `${day}-${month}-${year}`;
    
      if (userId) {
        try {
          const response = await fetch(`http://localhost:3001/cart/add/${userId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, products: myCart, date: currentDate }),
          });
    
          if (!response.ok) {
            throw new Error('Failed to save the cart');
          }
          
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error adding cart:', error);
          return [];
        }
      }
    };
    // getUserCarts = async () => {
    //   const userId = localStorage.getItem('userId');
    //   try {
    //     const response = await fetch(`http://localhost:3001/cart/${userId}`, {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'uid': userId || '',
    //       },
    //       credentials: 'include',
    //     });
    
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    
    //     const data = await response.json();
    //     console.log('Data received from server:', data);
    
    //     if (Array.isArray(data)) {
    //       return data; // מחזיר את כל הסלים
    //     } else {
    //       console.error('Unexpected data structure:', data);
    //       return [];
    //     }
    //   } catch (error) {
    //     console.error('Error fetching user carts:', error);
    //     return [];
    //   }
    // };

    
    async getUserCarts(): Promise<Cart[]> {
      const userId = localStorage.getItem('userId'); // כאן שולפים את userId מ-localStorage
      try {
        const response = await axios.get(`http://localhost:3001/cart/carts`, {
          headers: {
            'Content-Type': 'application/json',
            'userId': userId || '', // שולחים את userId בכותרות של הבקשה
          },
          withCredentials: true,
        });
        if (response.status === 200) {
          return response.data;
        } else {
          console.error('Error fetching user carts:', response.status);
          return [];
        }
      } catch (error) {
        console.error('Error fetching user carts:', error);
        throw error;
      }
    }
   
}
  export default CartService;
  