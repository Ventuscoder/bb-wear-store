import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducer.utils"
import { Category, categoryActionTypes } from "./category.types"

export type FetchCategoriesStart = Action<categoryActionTypes.FETCH_CATEGORIES_START>

export type FetchCategoriesSuccess = ActionWithPayload<categoryActionTypes.FETCH_CATEGORIES_SUCCESS, Category[]>

export type FetchCategoriesFailed = ActionWithPayload<categoryActionTypes.FETCH_CATEGORIES_FAILED, Error>

export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailed

export const fetchCategoriesStart = withMatcher(() =>
  createAction(categoryActionTypes.FETCH_CATEGORIES_START)
)

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]) =>
    createAction(
      categoryActionTypes.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    )
)

export const fetchCategoriesFailed = withMatcher((error: Error) =>
  createAction(categoryActionTypes.FETCH_CATEGORIES_FAILED, error)
)