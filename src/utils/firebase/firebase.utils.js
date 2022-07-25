import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDVSet7th9KqqzsQa2izeJ49DhNceg_0sE",
    authDomain: "crwn-clothing-db-7d91e.firebaseapp.com",
    projectId: "crwn-clothing-db-7d91e",
    storageBucket: "crwn-clothing-db-7d91e.appspot.com",
    messagingSenderId: "816175027744",
    appId: "1:816175027744:web:305c2a266657b00bc80e45"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error) {
            console.log('Error creating the user', error.message);
        }
    }

    return userDocRef;
}