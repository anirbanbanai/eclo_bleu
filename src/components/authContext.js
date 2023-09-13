"use client"
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser} from 'firebase/auth'
import { createContext, useEffect, useState } from "react";
import app from '../../firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const ProviderRoute = ({children})=>{
    const [user, setUser] = useState()
    const createUser = (email, pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass);
    }

    const LoginUser=(email,pass)=>{
        return signInWithEmailAndPassword(auth,email,pass)
    }

    const LogOut=()=>{
      return signOut(auth)
    }

    const updateUserInfo=(name, img)=>{
        return updateCurrentUser(auth.currentUser,{displayName: name, photoURL: img } )
    }

    useEffect(()=>{
        const unSub = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        });
        return ()=>{
            unSub();
        }
    })
    const authInfo={
        user,
        createUser,
        LoginUser,
        LogOut,
        updateUserInfo
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
}

export default ProviderRoute;