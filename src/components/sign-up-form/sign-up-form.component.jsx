import { useState } from "react"
import { useDispatch } from "react-redux"

import { signUpStart } from "../../store/user/user.action"

import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"

import './sign-up-form.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function SignUpForm() {
    const dispatch = useDispatch()

    const [formFields, setFormFields] = useState(defaultFormFields)

    function handleChange(event) {
        const { name, value } = event.target
        setFormFields({...formFields, [name]: value})
    }

    function resetFormFields() {
        setFormFields(defaultFormFields)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        if (formFields.password !== formFields.confirmPassword) {
            alert('Passwords do not match!')
            return
        }

        try {
            dispatch(signUpStart(formFields.email, formFields.password, formFields.displayName))
            resetFormFields()
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            } else if (error.code === 'auth/weak-password') {
                alert('Weak password, cannot create user')
            }
            console.log('User creation encountered an error', error)
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type="text" required onChange={handleChange} name="displayName" value={formFields.displayName} />
                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={formFields.email} />
                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={formFields.password} />
                <FormInput label='Confirm Password' type="password" required onChange={handleChange} name="confirmPassword" value={formFields.confirmPassword} />
                <Button type="submit" buttonType='inverted'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm