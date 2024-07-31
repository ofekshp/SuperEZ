const Product = require('../models/Product');

const reverseString = (str) => {
    return str.split('').reverse().join('');
};

const addToCart = async (req, res) => {
    const { fruitsToSave, vegetablesToSave } = req.body;
    try {
        const productsToSave = [...fruitsToSave, ...vegetablesToSave];
                
        const reversedProducts = productsToSave.map(product => ({
            ...product,
            name: reverseString(product.name)
        }));
        console.log("Products to save:", JSON.stringify(reversedProducts, null, 1));

        const foundProducts = [];
        for (const product of reversedProducts) {
            const foundProduct = await Product.findOne({ name: product.name });
            if (foundProduct) {
                foundProducts.push(foundProduct);
            }
        }
        res.status(200).json(foundProducts);
    } catch (err) {
        console.log("didnt find products");
        res.status(500).send(err.message);
    }
};

module.exports = {
    addToCart,
};
