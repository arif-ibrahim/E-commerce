export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        item => item.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map( cartItem => 
            cartItem.id === existingCartItem.id
                ? {...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}];

}

export const removeItem = (cartItems, itemToRemove) => {
    if(itemToRemove.quantity === 1){
        return cartItems.filter(item => item.id !== itemToRemove.id)
    }

    return cartItems.map( item => 
        item.id === itemToRemove.id 
            ? {...item, quantity: item.quantity - 1}
            : item
    )
}