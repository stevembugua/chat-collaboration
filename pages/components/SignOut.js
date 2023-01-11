import React from "react";
import { auth } from "../firebase"

const SignOut = () => {
    return (
        <>
            <button onClick={() => {
                auth.signOut()
            }}>signOut</button>
        </>
    );
}
 
export default SignOut;