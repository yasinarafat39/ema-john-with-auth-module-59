import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail, sendEmailVerification, signOut, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth(app);

export const AuthContext = createContext()

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null)


    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = (googleProvider) => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const authInfo = {
        user,
        createNewUser,
        Login,
        emailVerification,
        signInWithGoogle,
        logOut
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current User inside state change', currentUser);
            setUser(currentUser)
        });

        return () => unSubscribe()
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;