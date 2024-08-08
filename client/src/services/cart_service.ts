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
  
    addProduct(product: Product) {
      // Handle cart for not logged in user  
      if(localStorage.getItem('userId') === undefined){
        const existingProductIndex = this.basketProducts.findIndex(p => p.name === product.name);
        if (existingProductIndex > -1) {
          this.basketProducts[existingProductIndex] = {
            ...this.basketProducts[existingProductIndex],
            quantity: this.basketProducts[existingProductIndex].quantity + product.quantity,
          };
        } else {
          this.basketProducts.push(product);
        }
      }
      
      this.saveBasket();
    }
  
    removeProduct(productName: string) {
      this.basketProducts = this.basketProducts.filter(product => product.name !== productName);
      this.saveBasket();
    }
  
    getBasketProducts() {
        return this.basketProducts;
    }
  }
  
  export default CartService;
  