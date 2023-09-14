"use client"
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile} from 'firebase/auth'
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

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
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
        updateUserInfo,
        updateUserProfile
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
}

export default ProviderRoute;