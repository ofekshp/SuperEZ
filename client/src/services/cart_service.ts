interface Product {
    name: string;
    quantity: number;
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
      if (userId) {
      try{
               const response = await fetch(`http://localhost:3001/cart/add/${userId}`, {
                 method: 'POST',
                 headers: {
                   'Content-Type': 'application/json',
                 },
                 body: JSON.stringify({ userId, products: myCart }),
              })
             }catch (error) {
               console.error('Error add product:', error);
               return []; // Return an empty array on error
             }
      }

      try {
        const response = await fetch(`http://localhost:3001/compare`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ products: myCart }),
        });
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error('Error get CHEAP CART:', error);
        return []; // Return an empty array on error
      }
    }
  }
  
  export default CartService;
  