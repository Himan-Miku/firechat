import { useContext, createContext, useState, useEffect } from "react";
import { auth, database } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { collection, query, orderBy } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('User',currentUser);
        })
    
      return () => {
        unsubscribe()
      }
    }, [])
    
    const logOut = () => {
        signOut(auth)
    }

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    const dbInstance = collection(database, 'messages')
    const queryRef = query(dbInstance, orderBy('createdAt'))

    return (
        <AuthContext.Provider value={{ googleSignIn, logOut, user, dbInstance, queryRef }}> 
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}