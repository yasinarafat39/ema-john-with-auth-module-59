import { faArrowRight, faClose, faDeleteLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
 
import './Cart.css';

const Cart = ({ cart, clearCart }) => {
    console.log(cart);
    const {id} = cart;

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
    }

    let tax = parseFloat((total * 0.1).toFixed(2));
    // let tax = parseFloat(taxString);

    let grandTotal = (total + totalShipping + tax);
 

    return (
        <div className='order-summary'>
            <h2 className='order-header'>Order Summary</h2>

            <div className='ordered-cart'><p>Selected Items:</p> <span> {cart.length} </span></div>
            <div className='ordered-cart'><p>Total Price:</p> <span>$ {total}</span></div>
            <div className='ordered-cart'><p>Shipping Charge:</p> <span>$ {totalShipping}</span></div>
            <div className='ordered-cart'><p>Tax:</p> <span>$ {tax}</span></div>
            <div className='ordered-cart' id='grand-total'><h4>Grand Total=</h4> <span>$ {grandTotal}</span></div>

            <button onClick={() => clearCart()} className='btn-clear-cart'>Clear Cart &nbsp; <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
            <Link  to='/orders' className='btn-review-order'>Review Order &nbsp; <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
        </div>
    );
};

export default Cart;