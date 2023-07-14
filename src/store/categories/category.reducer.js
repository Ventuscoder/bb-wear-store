import { categoryActionTypes } from "./category.types"

export const categoriesInitialState = {
    categoriesArray: []
}

export function categoriesReducer(state = categoriesInitialState, action = {}) {
    const { type, payload } = action

    switch (type) {
        case categoryActionTypes.SET_CATEGORIES:
            return { ...state, categoriesArray: payload }
        default:
            return state
    }
}