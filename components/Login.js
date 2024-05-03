import { useState } from 'react';
import styles from '../styles/Login.module.css';
import SignUp from './SignUp';
import SignIn from "./SignIn";



function Login() {

    const [displaySignUp, setDisplaySignUp] = useState(false)
    const [displaySignIn, setDisplaySignIn] = useState(false)

    //fait apparaitre les modals du Sign Up / Sign In
 const popSignUp = () => {
    setDisplaySignUp(true)
 }
 const popSignIn = () => {
    setDisplaySignIn(true)
 }

    return (
        <div className={styles.container}>
            { displaySignUp && <SignUp/> }
            { displaySignIn && <SignIn/> }


            <div className={styles.leftcontainer}>
            </div>

            <div className={styles.rightcontainer}>  
            <div className={styles.content} >         
                <img src="/logo-twitter.png" className={styles.logotwitter} alt="Logo" />
                <p className={styles.title}> See what's happening </p>
                <p className={styles.join}> Join Hackatweet today. </p>
                <button className={styles.signup} onClick={() => popSignUp()}>Sign Up</button>
                <p className={styles.question}> Already have an account ?</p>  
                <button className={styles.signin} onClick={() => popSignIn()}>Sign In</button>   
                </div> 

            </div>

        </div >
    );
}

export default Login;