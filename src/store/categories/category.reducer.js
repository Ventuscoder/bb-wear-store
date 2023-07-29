import { createSlice } from "@reduxjs/toolkit"

const categoriesInitialState = {
    categories: []
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: categoriesInitialState,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload
        }
    }
})

export const { setCategories } = categoriesSlice.actions

export const categoriesReducer = categoriesSlice.reducer

/* export function categoriesReducer(state = categoriesInitialState, action = {}) {
    const { type, payload } = action

    switch (type) {
        case categoryActionTypes.SET_CATEGORIES:
            return { ...state, categories: payload }
        default:
            return state
    }
} */