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



//decrease qty if 1 then remove 
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find( //find the first item in array, loops through objs
        cartItem => cartItem.id === cartItemToRemove.id
    )
    console.log(existingCartItem);


    //if the qty is 1
    if (existingCartItem.quantity === 1) {
        //loop through to filter out the item to remove
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    //if qty is more than one
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ? //if we match the item
            { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem) //if not return the exact same item
}


// More info on find:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find