import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    // get Products
    const productsData = await fetch('products.json')
    const products = await productsData.json();

    // get cart
    const savedCart = getStoredCart();
    const initialCart = [];

    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        console.log(id, addedProduct);

        if (addedProduct) {
            const quantity = savedCart[id];
            console.log(id, quantity);
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct)
        }
    }
    return { products: products, initialCart: initialCart };
}