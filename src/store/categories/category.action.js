import { createAction } from "../../utils/reducer/reducer.utils"
import { categoryActionTypes } from "./category.types"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"

export function fetchCategoriesStart() {
    return createAction(categoryActionTypes.FETCH_CATEGORIES_START)
}

export function fetchCategoriesSuccess(categoriesArray) {
    return createAction(categoryActionTypes.FETCH_CATEGORIES_SUCCESS, categoriesArray)
}

export function fetchCategoriesFailed(error) {
    return createAction(categoryActionTypes.FETCH_CATEGORIES_FAILED, error)
}

export function fetchCategoriesAsync() {
    return async (dispatch) => {
        dispatch(fetchCategoriesStart())

        try {
            const categoriesArray = await getCategoriesAndDocuments()
            dispatch(fetchCategoriesSuccess(categoriesArray))
        } catch (error) {
            dispatch(fetchCategoriesFailed(error))
        }

    }
}