import { useContext } from "react"
import { CategoriesContext } from "../../contexts/categories.context"

import './shop.styles.scss'

import ProductCard from "../../components/product-card/product-card.component"

function Shop() {
    const {categoriesMap} = useContext(CategoriesContext)

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