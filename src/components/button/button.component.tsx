import { ButtonHTMLAttributes } from 'react'

import './button.styles.scss'

enum BUTTON_TYPE_CLASSES {
    google = 'google-sign-in',
    inverted = 'inverted'
}

type ButtonProps = {
    buttonType: BUTTON_TYPE_CLASSES
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, buttonType = BUTTON_TYPE_CLASSES.inverted, ...otherProps }: ButtonProps) {
    return (
        <button className={`button-container ${buttonType}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button