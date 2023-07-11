import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import './product-card.styles.scss'

import Button from '../button/button.component'

function ProductCard({ product }) {
    const { name, price, id, location } = product
    const { addItemToCart } = useContext(CartContext)

    function addProductToCart() { addItemToCart(product) }

    return (
        <div className='product-card-container'>
            <img src={'images/'+location+'/'+id+'.png'} alt={name} />
            <div className='footer'>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
        </div>
    )
}

export default ProductCard