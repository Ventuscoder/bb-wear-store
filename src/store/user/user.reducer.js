import { userActionTypes } from "./user.types"

export function userReducer(state = userInitialState, action = {}) {
    const { type, payload } = action

    switch (type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state
    }
}

export const userInitialState = {
    currentUser: null
}