import { userActionTypes } from "./user.types"

export function userReducer(state = userInitialState, action = {}) {
    const { type, payload } = action

    switch (type) {
        case userActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: payload
            }
        case userActionTypes.SIGN_IN_FAILED:
            return {
                ...state, error: payload
            }
        default:
            return state
    }
}

const userInitialState = {
    currentUser: null,
    isLoading: false,
    error: null
}