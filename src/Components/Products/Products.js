import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css';

const Products = ({product, handleAddToCart}) => {

    const { name, category, img, seller, price, ratings } =product;

    
    return (
        <div className='product'>
            <img src={img} alt="N/A" />
            <div className='product-info'>
                <h3 className='name'>{name}</h3>
                <p className='price'>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button onClick={() =>handleAddToCart(product)} className='btn-cart'>
                Add to Cart &nbsp;
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Products;