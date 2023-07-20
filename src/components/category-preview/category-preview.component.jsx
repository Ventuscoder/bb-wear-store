import { Fragment } from "react"
import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../store/categories/category.selector"

import ProductCard from "../product-card/product-card.component"

function CategoryPreview() {
    const categoriesMap = useSelector(selectCategoriesMap)

    return (
        <Fragment>
            {Object.keys(categoriesMap).map(title => {
                return categoriesMap[title].map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            )}
        </Fragment>
    )
}

export default CategoryPreview