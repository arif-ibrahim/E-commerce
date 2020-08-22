import React from 'react';
import './cart-item.styles.scss';


const cartItem = ({item: {imageUrl, name, price, quantity}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item"/>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="">{quantity} X ${price}</span>
            
        </div>
    </div>
);

export default cartItem;