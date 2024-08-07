interface Product {
    name: string;
    quantity: number;
  }
  
  class CartService {
    private basketProducts: Product[];
  
    constructor() {
      const savedBasket = localStorage.getItem('basketProducts');
      this.basketProducts = savedBasket ? JSON.parse(savedBasket) : [];
    }
  
    saveBasket() {
      localStorage.setItem('basketProducts', JSON.stringify(this.basketProducts));
    }
  
    async addProduct(product: Product) {
      // Handle cart for not logged in user  
      const userId = localStorage.getItem('userId');
      if(!userId){
        const existingProductIndex = this.basketProducts.findIndex(p => p.name === product.name);
        if (existingProductIndex > -1) {
          this.basketProducts[existingProductIndex] = {
            ...this.basketProducts[existingProductIndex],
            quantity: this.basketProducts[existingProductIndex].quantity + product.quantity,
          };
        } else {
          this.basketProducts.push(product);
        }
        this.saveBasket();
        return this.basketProducts;
      }
      // Handle cart for logged in user
      else{
        try{
          const response = await fetch(`http://localhost:3001/cart/add/${userId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, product }),
          })
          const data = await response.json();
          return data;
        }catch (error) {
          console.error('Error add product:', error);
          return []; // Return an empty array on error
        }
    }
  }

  
    async removeProduct(productName: string) {
      // Handle cart for not logged in user  
      const userId = localStorage.getItem('userId');
      if (!userId) {
        this.basketProducts = this.basketProducts.filter(product => product.name !== productName);
        this.saveBasket();
        return this.basketProducts;
      } else {
        try {
          const response = await fetch(`http://localhost:3001/cart/remove/${userId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, productName }),
          });
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error remove product:', error);
          return []; // Return an empty array on error
        }
      }
    }
    
  
    async getBasketProducts() {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        this.saveBasket();
        return this.basketProducts; // Return the local basketProducts array
      } else {
        try {
          const response = await fetch(`http://localhost:3001/cart/${userId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error get cart:', error);
          return []; // Return an empty array on error
        }
      }
    }
    
  }
  
  export default CartService;
  