import React, { useState } from "react";
import { db, auth } from '../firebase'
import firebase from "firebase/compat/app";
import { collection } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";


const SendMessage = ({scroll}) => {
    const [msg, setMsg] = useState('')

     function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

         collection(db,'messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <>
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <input placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    
        </>
    );
}
 
export default SendMessage;