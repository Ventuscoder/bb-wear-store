import { createAction } from "../../utils/reducer/reducer.utils"
import { userActionTypes } from "./user.types"

export function setCurrentUser(user) {
    return createAction(userActionTypes.SET_CURRENT_USER, user)
}