import { useState } from "react";
import styles from '../styles/SignIn.module.css'
import { useRouter } from 'next/router'
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";





function SignIn(props) {

    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const dispatch = useDispatch();


    const router = useRouter()


    const handleConnection = () => {

        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ username: signInUsername, token: data.token }));
                    setSignInUsername('');
                    setSignInPassword('');
                    router.push('/')

                }
            });
    };



    return (
        <div className={styles.signInContainer}>
            <div className={styles.close} >
                <button className={styles.buttonClose} onClick={() => props.popSignIn()} >X</button>
            </div>
            <img src="/logo-twitter.png" className={styles.logotwitter} alt="Logo" />
            <h2 className={styles.title}>Connect to Hackatweet </h2>
            <input className={styles.input} type="text" placeholder="Username" value={signInUsername} onChange={(e) => setSignInUsername(e.target.value)} />
            <input className={styles.input} type="password" placeholder="Password" value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} />
            <button className={styles.button} onClick={() => handleConnection()}>Sign In</button>

        </div>
    );




}
export default SignIn;