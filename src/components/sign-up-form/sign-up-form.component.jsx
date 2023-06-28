import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function SignUpForm() {
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
            const { user } = await createAuthUserWithEmailAndPassword(formFields.email, formFields.password)
            await createUserDocumentFromAuth(user, { displayName: formFields.displayName })
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
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" />
                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" />
                <label>Password</label>
                <input type="password" required onChange={handleChange} name="password" />
                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm