import { createContext, useReducer } from "react"

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
})

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

export const cartActionTypes = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

function cartReducer(state, action) {
    const { type, payload } = action

    switch (type) {
        case cartActionTypes.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case cartActionTypes.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            throw new Error(`Unhandled type of ${type} in cartReducer`)
    }
}

const initialState = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

export const CartProvider = ({ children }) => {
    const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, initialState)
    
    function updateCartItemsReducer(newCartItems) {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
        dispatch({ type: cartActionTypes.SET_CART_ITEMS, payload: { cartItems: newCartItems, cartCount: newCartCount, cartTotal: newCartTotal } })
    }

    
    function addItemToCart(productToAdd) {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemsReducer(newCartItems)
    }
    
    function removeItemFromCart(cartItemToRemove) {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove)
        updateCartItemsReducer(newCartItems)
    }
    
    function clearItemFromCart(cartItemToClear) {
        const newCartItems = clearCartItem(cartItems, cartItemToClear)
        updateCartItemsReducer(newCartItems)
    }
    
    function setIsCartOpen(bool) {
        dispatch({ type: cartActionTypes.SET_IS_CART_OPEN, payload: bool })
        
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, cartCount, cartTotal}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}