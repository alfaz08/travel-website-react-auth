import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { Result } from "postcss";


export const AuthContext =createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] =useState(true)

const createUser = (email,password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
}

  const signIn =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
    
  }

 const googleLogin =()=>{
  setLoading(true)
  return signInWithPopup(auth,googleProvider)
 }

 useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth,(currenUser)=>{
    setUser(currenUser)
    setLoading(false)
  })
  return ()=>{
    unSubscribe()
  }
 },[])

 const logOut=()=>{
  setLoading(true)
  return signOut(auth)
 }

const authInfo ={
  googleLogin,
  logOut,
  createUser,
  signIn,
  user,
  loading
}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      </AuthContext.Provider>
  );
};

export default AuthProviders;