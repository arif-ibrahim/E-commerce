import { createSelector } from 'reselect';



const selectCart = state => state.cart;

export const selectCartItem = createSelector(
    [selectCart,],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart,],
    cart => cart.hidden
);

export const selectCartItemCounts = createSelector(
    [ selectCartItem, ],
    cartItems => 
        cartItems.reduce(
            (accumulator, currentValue) => currentValue.quantity + accumulator, 
        0)
);

export const selectTotalPrice = createSelector(
    [selectCartItem,],
    cartItems => cartItems.reduce(
        (accumulator, currentValue) => currentValue.quantity * currentValue.price + accumulator, 0)
);