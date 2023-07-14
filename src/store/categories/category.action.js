import { createAction } from "../../utils/reducer/reducer.utils"
import { categoryActionTypes } from "./category.types"

export function setCategories(categoriesArray) {
    return createAction(categoryActionTypes.SET_CATEGORIES, categoriesArray)
}