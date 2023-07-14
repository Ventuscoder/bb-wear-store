import { categoryActionTypes } from "./category.types"

export const categoriesInitialState = {
    categoriesMap: {}
}

export function categoriesReducer(state = categoriesInitialState, action = {}) {
    const { type, payload } = action

    switch (type) {
        case categoryActionTypes.SET_CATEGORIES_MAP:
            return {...state, categoriesMap: payload}
        default:
            return state
    }
}