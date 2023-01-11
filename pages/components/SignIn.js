import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase"





const SignIn = () => {

    const signInWithGoogle = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }
    return (

        <>
            <button onClick={signInWithGoogle}>signin</button>
        </>
    );
}
 
export default SignIn;