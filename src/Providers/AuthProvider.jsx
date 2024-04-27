import { GoogleAuthProvider, createUserWithEmailAndPassword,
     onAuthStateChanged, signInWithEmailAndPassword, 
     signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";


export const AuthContext = createContext('null')
 
const AuthProvider = ({children}) => {
const [user,setUser]= useState(null)
const [loading, setLoading] = useState(true)

const signUp=(email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const googleProvider =new GoogleAuthProvider();

const signUpGoogle=()=>{

    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}
const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unSubscribe()
    }
},[])


const authInfo={
    user, 
    loading,
    signUp,signIn,
    logOut,
    signUpGoogle,setLoading
}
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;