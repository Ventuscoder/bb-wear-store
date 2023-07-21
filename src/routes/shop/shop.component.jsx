import { useEffect } from "react"
import { useDispatch } from "react-redux"

import './shop.styles.scss'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { setCategories } from "../../store/categories/category.action"
import CategoryPreview from "../../components/category-preview/category-preview.component"

function Shop() {
    const dispatch = useDispatch()

    useEffect(() => {
        async function getCategoriesMap() {
            const categoriesArray = await getCategoriesAndDocuments()
            dispatch(setCategories(categoriesArray))
        }

        getCategoriesMap()
    }, [dispatch])

    return (
        <div className="products-container">
            <CategoryPreview />
        </div>
    )
}

export default Shop