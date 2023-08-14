import { cartActionTypes, CartItem } from "./cart.types"
import { createAction, withMatcher, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils"
import { CategoryItem } from "../categories/category.types"

function addCartItem(cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}
    
function removeCartItem(cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if (existingCartItem && existingCartItem.quantity === 1) return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)

    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
}

function clearCartItem(cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}

export type SetIsCartOpen = ActionWithPayload<cartActionTypes.SET_IS_CART_OPEN, boolean>

export type SetCartItems = ActionWithPayload<cartActionTypes.SET_CART_ITEMS, CartItem[]>

export const setIsCartOpen = withMatcher((bool: boolean): SetIsCartOpen => createAction(cartActionTypes.SET_IS_CART_OPEN, bool))

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => createAction(cartActionTypes.SET_CART_ITEMS, cartItems))

export function addItemToCart(cartItems: CartItem[], productToAdd: CategoryItem) {
    const newCartItems = addCartItem(cartItems, productToAdd)
    return createAction(cartActionTypes.SET_CART_ITEMS, newCartItems)
    return setCartItems(newCartItems)
}

export function removeItemFromCart(cartItems: CartItem[], cartItemToRemove: CartItem) {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove)
    return createAction(cartActionTypes.SET_CART_ITEMS, newCartItems)
    return setCartItems(newCartItems)
}

export function clearItemFromCart(cartItems: CartItem[], cartItemToClear: CartItem) {
    const newCartItems = clearCartItem(cartItems, cartItemToClear)
    return createAction(cartActionTypes.SET_CART_ITEMS, newCartItems)
    return setCartItems(newCartItems)
}
