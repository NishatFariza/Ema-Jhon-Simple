import React from 'react';
import './Product.css'
import { BsFillCartCheckFill } from 'react-icons/bs';

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props;
    const {name, img, seller, price, ratings} =product;
//    console.log(props);
       
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratting: {ratings} Start</small></p>
            </div>
            <button onClick={ () => handleAddToCart(product)} className='button-cart'>
                <p className='button-text'>Add To Cart</p><BsFillCartCheckFill></BsFillCartCheckFill>
            </button>
        </div>
    );
};

export default Product;