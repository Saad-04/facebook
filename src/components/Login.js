import { Button } from '@mui/material'
import React from 'react'
import './login.css'
import { signInWithRedirect ,GoogleAuthProvider} from 'firebase/auth'
import { auth, provider } from '../firebase'
const style = {
    img_1: "https://tse4.mm.bing.net/th?id=OIP.QHODby_bS81-x2of8vCIhgHaHa&pid=Api&P=0",
    img_2: "https://tse2.mm.bing.net/th?id=OIP.Ej4IJrdSDFioMXO17TV12QHaBu&pid=Api&P=0"
}

function Login() {

    const signIn =()=> {
        const provider = new GoogleAuthProvider();
      signInWithRedirect(auth,provider)
            // .then((res) => {
            //     dispatch({
            //         type: actionType.SET_USER,
            //         user: res.user
            //     })
            // })
            // .catch((err) => { console.log(err.message) })
            console.log(auth);
    }
    return (
        <>
            <div className="login">
                <div className="login_logo">
                    <img src={style.img_1} alt="" />
                    <img src={style.img_2} alt="" />
                </div>
                <Button onClick={()=>signIn()}>
                    Sign in
                </Button>
            </div>
        </>
    )
}

export default Login