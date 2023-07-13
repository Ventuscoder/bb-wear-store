import { createContext, useEffect, useReducer } from "react"

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils"

import { createAction } from "../utils/reducer/reducer.utils"

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const userActionTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

function userReducer(state, action) {
    const { type, payload } = action

    switch (type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }
}

const initialState = {
    currentUser: null
}

export function UserProvider({ children }) {
    const [{ currentUser }, dispatch] = useReducer(userReducer, initialState)

    function setCurrentUser(user) {
        dispatch(createAction(userActionTypes.SET_CURRENT_USER, user))
    }

    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}