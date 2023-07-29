import { createSlice } from "@reduxjs/toolkit"

const userInitialState = {
    currentUser: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload
        }
    }
})


export const { setCurrentUser } = userSlice.actions

export const userReducer = userSlice.reducer