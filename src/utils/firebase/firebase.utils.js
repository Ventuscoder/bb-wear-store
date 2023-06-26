import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD2zqU3LBE2U7hu9WN8Z6d6cgsd77SyAUg",
    authDomain: "bb-wear-db.firebaseapp.com",
    projectId: "bb-wear-db",
    storageBucket: "bb-wear-db.appspot.com",
    messagingSenderId: "854678078229",
    appId: "1:854678078229:web:414ebd390caf564757df1c"
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async function(userAuth) {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
}