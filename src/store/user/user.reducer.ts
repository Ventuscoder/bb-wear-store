import { AnyAction } from "redux"
import { userActionTypes } from "./user.types"
import { signInFailed, signUpFailed, signOutFailed, signOutSuccess, signInSuccess } from "./user.action"
import { UserData } from "../../utils/firebase/firebase.utils"

export type UserState = {
    readonly currentUser: UserData | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const userInitialState: UserState = {
    currentUser: null,
    isLoading: false,
    error: null
}

export function userReducer(state = userInitialState, action: AnyAction) {

    if (signInSuccess.match(action)) {
        return { ...state, currentUser: action.payload }
      }
    
      if (signOutSuccess.match(action)) {
        return { ...state, currentUser: null }
      }
    
      if (
        signOutFailed.match(action) ||
        signInFailed.match(action) ||
        signUpFailed.match(action)
      ) {
        return { ...state, error: action.payload }
      }
    
      return state
}