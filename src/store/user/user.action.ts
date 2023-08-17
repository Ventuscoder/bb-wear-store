import { createAction, withMatcher, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils"
import { userActionTypes } from "./user.types"
import { UserData, AdditionalInfo } from "../../utils/firebase/firebase.utils"
import { User } from "firebase/auth"

export type CheckUserSession = Action<userActionTypes.CHECK_USER_SESSION>

export type GoogleSignInStart = Action<userActionTypes.GOOGLE_SIGN_IN_START>

export type EmailSignInStart = ActionWithPayload<
  userActionTypes.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>

export type SignInSuccess = ActionWithPayload<
  userActionTypes.SIGN_IN_SUCCESS,
  UserData
>

export type SignInFailed = ActionWithPayload<
  userActionTypes.SIGN_IN_FAILED,
  Error
>

export type SignUpStart = ActionWithPayload<
  userActionTypes.SIGN_UP_START,
  { email: string }
>

export type SignUpSuccess = ActionWithPayload<
  userActionTypes.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AdditionalInfo }
>

export type SignUpFailed = ActionWithPayload<
  userActionTypes.SIGN_UP_FAILED,
  Error
>

export type SignOutStart = Action<userActionTypes.SIGN_OUT_START>

export type SignOutSuccess = Action<userActionTypes.SIGN_OUT_SUCCESS>

export type SignOutFailed = ActionWithPayload<
  userActionTypes.SIGN_OUT_FAILED,
  Error
>

export const checkUserSession = withMatcher(
  (): CheckUserSession => createAction(userActionTypes.CHECK_USER_SESSION)
)

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => createAction(userActionTypes.GOOGLE_SIGN_IN_START)
)

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(userActionTypes.EMAIL_SIGN_IN_START, { email, password })
)

export const signInSuccess = withMatcher(
  (user: UserData): SignInSuccess =>
    createAction(userActionTypes.SIGN_IN_SUCCESS, user)
)

export const signInFailed = withMatcher(
  (error: Error): SignInFailed =>
    createAction(userActionTypes.SIGN_IN_FAILED, error)
)

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(userActionTypes.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
)

export const signUpSuccess = withMatcher(
  (user: User, additionalDetails: AdditionalInfo): SignUpSuccess =>
    createAction(userActionTypes.SIGN_UP_SUCCESS, { user, additionalDetails })
)

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed =>
    createAction(userActionTypes.SIGN_UP_FAILED, error)
)

export const signOutStart = withMatcher(
  (): SignOutStart => createAction(userActionTypes.SIGN_OUT_START)
)

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(userActionTypes.SIGN_OUT_SUCCESS)
)

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed =>
    createAction(userActionTypes.SIGN_OUT_FAILED, error)
)