import { createAction } from "../../utils/reducer/reducer.utils"
import { userActionTypes } from "./user.types"

export function setCurrentUser(user) {
    return createAction(userActionTypes.SET_CURRENT_USER, user)
}

export function checkUserSession() { return createAction(userActionTypes.CHECK_USER_SESSION) }

export function googleSignInStart() { return createAction(userActionTypes.GOOGLE_SIGN_IN_START) }

export function emailSignInStart(email, password) { return createAction(userActionTypes.EMAIL_SIGN_IN_START, {email, password}) }

export function signInSucess(user) { return createAction(userActionTypes.SIGN_IN_SUCCESS, user) }

export function signInFailed(error) { return createAction(userActionTypes.SIGN_IN_FAILED, error) }

export function signUpStart(email, password, displayName) { return createAction(userActionTypes.SIGN_UP_START, {email, password, displayName}) }

export function signUpSuccess(user, additionalInfo) { return createAction(userActionTypes.SIGN_UP_SUCCESS, {user, additionalInfo}) }

export function signUpFailed(error) { return createAction(userActionTypes.SIGN_UP_FAILED, error) }

export function signOutStart() { return createAction(userActionTypes.SIGN_OUT_START) }

export function signOutSuccess() { return createAction(userActionTypes.SIGN_OUT_SUCCESS) }

export function signOutFailed(error) { return createAction(userActionTypes.SIGN_OUT_FAILED, error) }