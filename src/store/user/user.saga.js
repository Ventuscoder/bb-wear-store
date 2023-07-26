import { userActionTypes } from "./user.types"
import { takeLatest, all, call, put } from 'redux-saga/effects'

import { signInSucess, signInFailed } from "./user.action"

import { getCurrentUser, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

export function* getSnapshotFromUserAuth(userAuth, additionalInfo = {}) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalInfo)
        yield put(signInSucess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser)
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSaga() {
    yield all([call(onCheckUserSession)])
}