import axios, { AxiosResponse } from 'axios';

interface Product {
    name: string;
    quantity: number;
}

interface AddToCartResponse {
    products: Product[];
}

class ProductCartService {
    async uploadProducts(fruitsToSave: Product[], vegetablesToSave: Product[]): Promise<AddToCartResponse> {
        try {
            const response: AxiosResponse<AddToCartResponse> = await axios.post('http://localhost:3000/api/addToCart', {
                fruitsToSave,
                vegetablesToSave
            });
            return response.data;
        } catch (error) {
            console.error("Error in front end:", error);
            throw error;
        }
    }
}

export default ProductCartService;
