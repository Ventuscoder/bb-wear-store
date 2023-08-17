import { AnyAction } from 'redux'
import { setCartItems, setIsCartOpen } from './cart.action'
import { CartItem } from "./cart.types"

export type CartState = {
    isCartOpen: boolean;
    cartItems: CartItem[]
}

export const cartInitialState: CartState = {
    isCartOpen: false,
    cartItems: []
}

export function cartReducer(state = cartInitialState, action: AnyAction): CartState {
    if (setIsCartOpen.match(action)) {
        return { ...state, isCartOpen: action.payload }
    }

    if (setCartItems.match(action)) {
        return { ...state, cartItems: action.payload }
    }

    return state
}