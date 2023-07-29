import { useDispatch } from 'react-redux'

import { addItemToCart } from '../../store/cart/cart.reducer'

import './product-card.styles.scss'

import Button from '../button/button.component'

function ProductCard({ product }) {
    const { name, price, id } = product
    const dispatch = useDispatch()

    function addProductToCart() { dispatch(addItemToCart(product)) }

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