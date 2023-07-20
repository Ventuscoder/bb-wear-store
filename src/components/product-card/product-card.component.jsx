import { useDispatch, useSelector } from 'react-redux'

import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

import './product-card.styles.scss'

import Button from '../button/button.component'

function ProductCard({ product }) {
    const { name, price, id } = product
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    function addProductToCart() { dispatch(addItemToCart(cartItems, product)) }

    return (
        <div className='product-card-container'>
            <img src={'images/products/'+id+'.png'} alt={name} />
            <div className='footer'>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
        </div>
    )
}

export default ProductCard