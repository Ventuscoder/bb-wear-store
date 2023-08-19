import { useState } from "react"
import { useDispatch } from "react-redux"

import { googleSignInStart, emailSignInStart } from "../../store/user/user.action"

import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"

import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: ''
}

function SignInForm() {
    const dispatch = useDispatch()

    const [formFields, setFormFields] = useState(defaultFormFields)

    async function signInWithGoogle() {
        dispatch(googleSignInStart())
    }

    function handleChange(event) {
        const { name, value } = event.target
        setFormFields({...formFields, [name]: value})
    }

    function resetFormFields() {
        setFormFields(defaultFormFields)
    }

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            dispatch(emailSignInStart(formFields.email, formFields.password))
            resetFormFields()
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                alert('Incorrect Password for email')
            } else if (error.code === 'auth/user-not-found') {
                alert('No user with this email')
            }
            console.log(error)
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={formFields.email} />
                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={formFields.password} />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google-sign-in" onClick={signInWithGoogle}>Google sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm