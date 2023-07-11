import './cart-item.styles.scss'

function CartItem({ cartItem }) {
    const { name, id, quantity, price } = cartItem

    return (
        <div className='cart-item-container'>
            <img src={'images/products/'+id+'.png'} alt={name} />
            <div className='item-details'>
                <span className="name">{name}</span>
                <span className="price">{quantity} x {price}</span>
            </div>
            <span>{quantity}</span>
        </div>
    )
}

export default CartItem