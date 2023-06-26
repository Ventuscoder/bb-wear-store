import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

function SignIn() {
    async function logGoogleUser() {
        const { user } = await signInWithGooglePopup()
        createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    )
}

export default SignIn