import { createSelector } from 'reselect';


const selectCart = state => state.cart;

export const selectCartItem = createSelector(
    [selectCart,],
    cart => cart.cartItems
);

export const selectCartItemCounts = createSelector(
    [ selectCartItem, ],
    cartItems => 
        cartItems.reduce(
            (accumulator, currentValue) => currentValue.quantity + accumulator, 
        0)
);