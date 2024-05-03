import { useState } from "react";
import styles from '../styles/SignUp.module.css'
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";
import { useRouter } from 'next/router'



function SignUp(props) {
    
    const dispatch = useDispatch();

    const [signUpFirstname, setSignUpFirstname] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const router = useRouter()



    const handleSignUp = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.result) {
                    dispatch(login({ username: signUpUsername, token: data.token, firstname: signUpFirstname }));
                    setSignUpUsername('');
                    setSignUpPassword('');
                    setSignUpFirstname('');
                  router.push('/')
                }
            });
    };

    return (
        <div className={styles.signUpContainer}>
            <div className={styles.close}>
                <button className={styles.buttonClose} onClick={() => props.popSignUp()}>X</button>
            </div>
            <img src="/logo-twitter.png" className={styles.logotwitter} alt="Logo" />
            <h2 className={styles.title}>Create your Hackatweet account</h2>
            <input className={styles.input} type="text" placeholder="Firstname" value={signUpFirstname} onChange={(e) => setSignUpFirstname(e.target.value)} />
            <input className={styles.input} type="text" placeholder="Username" value={signUpUsername} onChange={(e) => setSignUpUsername(e.target.value)} />
            <input className={styles.input} type="password" placeholder="Password" value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} />
            <button className={styles.button} onClick={() => handleSignUp()}>Sign Up</button>

        </div>
    );
};


export default SignUp;