import { createAction } from "../../utils/reducer/reducer.utils"
import { categoryActionTypes } from "./category.types"

export function setCategoriesMap(categoriesMap) {
    return createAction(categoryActionTypes.SET_CATEGORIES_MAP, categoriesMap)
}