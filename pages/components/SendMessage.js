import React, { useState } from "react";
import { db, auth } from '../firebase';
import { collection } from "firebase/firestore";
// import firebase from "firebase"


const SendMessage = ({scroll}) => {
    const [msg, setMsg] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        // const res = await collection(db, 'messages').add({
        //     text: msg,
        //     photoURL,
        //     uid,
        //     // createdAt: firebase.firestore.FieldValue.serverTimestamp()
        // })
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