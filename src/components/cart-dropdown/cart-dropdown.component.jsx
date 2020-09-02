import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItem} from '../../redux/cart/cart.selector';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';


const CartDropdown = ({ cartItems, history, dispatch, }) => (
    <div className="cart-dropdown">
        {cartItems.length ?
            <div className="cart-items">
                {
                    cartItems.map(item => <CartItem key={item.id} item={item}></CartItem>)
                }
            </div> : 
            <span className="empty-message">Card is empty</span>}
         
        <CustomButton 
            onClick={()=>
                {history.push('/checkout');
                dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>
    </div>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
})


export default withRouter(connect(mapStateToProps) (CartDropdown));