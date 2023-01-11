import styles from '../styles/Home.module.css'
import Chat from './components/Chat'
import SignIn from './components/SignIn'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase"



export default function Home() {

  const [user] = useAuthState(auth)
  return (
    <>
    {user ? <Chat />:<SignIn />}
     
     
    </>
  )
}
