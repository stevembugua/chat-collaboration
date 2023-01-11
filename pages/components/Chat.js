import React from "react";
import SignOut from "./SignOut";
import { useState, useEffect,useRef } from "react";
import { collection } from "firebase/firestore";
import { db,auth } from "../firebase"
import { orderBy, limit, onSnapshot } from "firebase/firestore";
import SendMessage from "./SendMessage"; 
const Chat = () => {
    const scroll = useRef()
    const [messages , setMessages] = useState([])
    useEffect(()=>{
        orderBy('createdAt'),limit(50),onSnapshot(collection(db, 'users'),snapshot=>{
            setMessages(snapshot.docs.map(doc =>doc.data))
        })
    },[])
    return (

        <>
        <SignOut />
        {messages.map(({id,text,photoURL,uid}) => (
            <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
               <img src={photoURL} alt="" /> 
               <p>{text}</p>
            </div>
        ))}
        <SendMessage scroll={scroll} />
        <div ref={scroll}></div>
        </>
    );
}
 
export default Chat;