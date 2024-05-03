import { useState } from "react";
import styles from '../styles/SignUp.module.css'


function SignUp() {

    const [signUpFirstname, setSignUpFirstname] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');


    const handleSignUp = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ username: signUpUsername, token: data.token }));
                }
            });
    };

    return (
        <div className={styles.signUpContainer}>
            <div className={styles.close}>
                <button className={styles.buttonClose} >X</button>
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