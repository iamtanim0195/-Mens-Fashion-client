import { createContext, useEffect } from "react"
import app from "./firebase.config";

import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    FacebookAuthProvider,

} from "firebase/auth"
import { useState } from "react";


export const AuthContext = createContext(null);
const auth = getAuth(app);
// provider
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const fbSignIn = () => {
        return signInWithPopup(auth, fbProvider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currnetUser => {
            console.log("observing current user", currnetUser);
            setUser(currnetUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const AuthInfo = {
        user,
        loading,
        googleSignIn,
        fbSignIn,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;