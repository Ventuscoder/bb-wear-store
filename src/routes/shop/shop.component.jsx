import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import './shop.styles.scss'

import { HashLoader } from "react-spinners"

import CategoryPreview from "../../components/category-preview/category-preview.component"
import { fetchCategoriesStart } from "../../store/categories/category.action"
import { selectCategoriesIsLoading } from "../../store/categories/category.selector"

function Shop() {
    const dispatch = useDispatch()
    const isLoading = useSelector(selectCategoriesIsLoading)

    useEffect(() => {
        dispatch(fetchCategoriesStart())
    }, [dispatch])

    return (
        isLoading ? <HashLoader color="#5e5d5a" cssOverride={{height: '60vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} size={75} /> :
        (
            <div className="products-container">
                <CategoryPreview />
            </div>
        )
    )
}

export default Shop