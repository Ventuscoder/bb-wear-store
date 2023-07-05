import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import './checkout-item.styles.scss'

function CheckoutItem({cartItem}) {
    const { name, id, price, quantity } = cartItem

    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)

    function clearItemHandler() { clearItemFromCart(cartItem) }
    function addItemHandler() { addItemToCart(cartItem) }
    function removeItemHandler() { removeItemFromCart(cartItem) }

    return (
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={'images/aj/'+id+'.jpg'} alt={name} />
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