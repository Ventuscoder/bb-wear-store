import { categoryActionTypes } from "./category.types"

export const categoriesInitialState = {
    categories: [],
    isLoading: false,
    error: null
}

export function categoriesReducer(state = categoriesInitialState, action = {}) {
    const { type, payload } = action

    switch (type) {
        case categoryActionTypes.FETCH_CATEGORIES_START:
            return { ...state, isLoading: true }
        case categoryActionTypes.FETCH_CATEGORIES_SUCCESS:
            return { ...state, categories: payload, isLoading: false }
        case categoryActionTypes.FETCH_CATEGORIES_FAILED:
            return { ...state, error: payload, isLoading: false }
        default:
            return state
    }
}