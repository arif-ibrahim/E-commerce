 import CartActionsTypes from './cart.types';


export const toggleCartHidden = () => ({
    type: CartActionsTypes.TOGGLE_CART_HIDDEN
})


export const addItem = (item) => ({
    type: CartActionsTypes.ADD_ITEM_CART,
    payload: item,
})

export const removeItem = (item) => ({
    type: CartActionsTypes.REMOVE_ITEM_FROM_CART,
    payload: item,
})

export const decreaseItem = (item) => ({
    type: CartActionsTypes.DECREASE_ITEM,
    payload: item,
})