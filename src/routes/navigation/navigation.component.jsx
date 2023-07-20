import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"

import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector"
import { selectIsCartOpen } from "../../store/cart/cart.selector"

import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { signOutUser } from "../../utils/firebase/firebase.utils"

import './navigation.styles.scss'

function Navigation() {
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

    async function signOutHandler() {
        await signOutUser()
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to={'/'}>
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to={'/shop'}>SHOP</Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                        ) : (
                            <Link className="nav-link" to={'/auth'}>SIGN IN</Link>
                            )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation