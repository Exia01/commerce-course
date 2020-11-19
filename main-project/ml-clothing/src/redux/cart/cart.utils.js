//Utility funcs related to redux code

export const addItemToCart = (cartItems, cartItemToAdd) => {


    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id) //will return the first item found in array


    //checking if the cart item exists
    if (existingCartItem) { //if there is at least one element that is not null
        return cartItems.map(cartItem => {
            return cartItem.id === cartItemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 } :
                { ...cartItem } //if it doesn't match then just return unchanged
        }) //returns of new arr

    }


    // if its not found in cart then spread whichever ones are in there and add new one with new prop of qty
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}



// More info on find:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find