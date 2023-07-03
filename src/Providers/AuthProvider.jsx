import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    const [loading,setLoading]=useState(true)

    const googleProvider = new GoogleAuthProvider();


    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const googleSignIn=()=>{
        setLoading (true)
        return signInWithPopup(auth,googleProvider)
    }


    const signIn= (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut= ()=>{
        setLoading(true)
        return signOut(auth);
    }

    const updateUserProfile =(name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
          })
    }

    // useEffect(()=>{
    //    const unsubscribe= onAuthStateChanged(auth,currentUser=>{
    //         setUser(currentUser)
    //         console.log(currentUser)
    //         if(currentUser){
    //             axios.post("http://localhost:5000/jwt",{email:currentUser.email})
    //             .then(data=>{
    //                 console.log(data.data.token)
    //                 localStorage.setItem('access-token', data.data.token)
    //                 setLoading(false);
    //             })
    //         }
    //         else{
    //             localStorage.removeItem('access-token')
    //         }
            
          
    //     });
    //     return ()=>{
    //         return unsubscribe
    //     }
    // },[])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
       
        //   console.log(currentUser);
          if (currentUser) {
            axios
              .post("http://localhost:5000/jwt", { email: currentUser.email })
              .then((response) => {
                const token = response.data.token;
                // console.log(token);
                localStorage.setItem('access-token', token);
                setLoading(false);
                setUser(currentUser);
              })
              .catch((error) => {
                console.error("Error fetching token:", error);
              });
          } else {
            setLoading(false);
            localStorage.removeItem('access-token');
          }
        });
      
        return unsubscribe; // Make sure to return the unsubscribe function from the effect
      
      }, []); // Empty dependency array to run the effect only once
      

    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;