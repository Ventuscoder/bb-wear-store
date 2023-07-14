import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

import './shop.styles.scss'

import ProductCard from "../../components/product-card/product-card.component"

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { setCategoriesMap } from "../../store/categories/category.action"
import { selectCategoriesMap } from "../../store/categories/category.selector"

function Shop() {
    const dispatch = useDispatch()

    useEffect(() => {
        async function getCategoriesMap() {
            const categoriesArray = await getCategoriesAndDocuments()
            dispatch(setCategoriesMap(categoryMap))
        }

        getCategoriesMap()
    }, [dispatch])

    const categoriesMap = useSelector(selectCategoriesMap)

    return (
        <div className="products-container">
            {Object.keys(categoriesMap).map(title => {
                return categoriesMap[title].map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            )}
        </div>
    )
}

export default Shop