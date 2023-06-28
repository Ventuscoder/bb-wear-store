import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"

function SignIn() {
    async function logGoogleUser() {
        const { user } = await signInWithGooglePopup()
        const userDocRef = createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn