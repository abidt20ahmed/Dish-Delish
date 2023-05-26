import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();


const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect((() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }

    }), [])

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const handleUrl = (url) => {
        setAvatar(url)
    }
    const handleName = (name, url) => {
        setName(name);
        setAvatar(url)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        handleUrl,
        avatar,
        handleName,
        name,
        auth
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;