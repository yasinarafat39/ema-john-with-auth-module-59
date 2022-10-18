import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {products, initialCart} = useLoaderData(); // { products: products, previousCart: initialCart }
    const [cart, setCart] = useState(initialCart);
    
    const handleRemoveItem = (id) => {
        const remainingItem = cart.filter(product => product.id !== id)
        setCart(remainingItem);
        removeFromDb(id);
        toast.success("Product Cleared!", {position: 'top-center', autoClose: 700})
    }

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart()
    }

    

    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem 
                    key={product.id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>Cart is Empty! <Link to='/shop'>Please shop</Link></h2>
                }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;