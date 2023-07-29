import { useDispatch } from 'react-redux'

import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../store/cart/cart.reducer'
import { selectCartItems } from '../../store/cart/cart.selector'

import './checkout-item.styles.scss'

function CheckoutItem({cartItem}) {
    const { name, id, price, quantity } = cartItem

    const dispatch = useDispatch()

    function clearItemHandler() { dispatch(clearItemFromCart(cartItem)) }
    function addItemHandler() { dispatch(addItemToCart(cartItem)) }
    function removeItemHandler() { dispatch(removeItemFromCart(cartItem)) }

    return (
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={'images/products/'+id+'.png'} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
                <div className="value">{quantity}</div>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem