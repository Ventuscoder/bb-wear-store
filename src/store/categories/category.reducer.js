import { categoryActionTypes } from "./category.types"

export const categoriesInitialState = {
    categories: []
}

export function categoriesReducer(state = categoriesInitialState, action = {}) {
    const { type, payload } = action

    switch (type) {
        case categoryActionTypes.SET_CATEGORIES:
            return { ...state, categories: payload }
        default:
            return state
    }
}