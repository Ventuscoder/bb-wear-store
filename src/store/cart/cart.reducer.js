import { createSlice } from "@reduxjs/toolkit"

function addCartItem(cartItems, productToAdd) {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}
    
function removeCartItem(cartItems, cartItemToRemove) {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if (existingCartItem.quantity === 1) return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)

    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
}

function clearCartItem(cartItems, cartItemToClear) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}

const cartInitialState = {
    isCartOpen: false,
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        setIsCartOpen(state, action) {
            state.isCartOpen = action.payload
        },
        addItemToCart(state, action) {
            state.cartItems = addCartItem(state.cartItems, action.payload)
        },
        removeItemFromCart(state, action) {
            state.cartItems = removeCartItem(state.cartItems, action.payload)
        },
        clearItemFromCart(state, action) {
            state.cartItems = clearCartItem(state.cartItems, action.payload)
        }
    }
})

export const { setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart } = cartSlice.actions

export const cartReducer = cartSlice.reducer