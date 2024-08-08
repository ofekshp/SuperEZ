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
      }
      // Handle cart for logged in user
      else{
        console.log('Cart : Logged in user');  
        fetch(`http://localhost:3001/cart/${userId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });        
        }
        this.saveBasket();
    }

  
    removeProduct(productName: string) {
      this.basketProducts = this.basketProducts.filter(product => product.name !== productName);
      this.saveBasket();
    }
  
    getBasketProducts() {
      const userId = localStorage.getItem('userId');
      if(!userId){
        return this.basketProducts;
      }
      else{
        console.log('Get Cart : Logged in user');
        fetch(`http://localhost:3001/cart/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    }
  }
  
  export default CartService;
  