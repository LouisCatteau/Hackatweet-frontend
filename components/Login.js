import styles from '../styles/Login.module.css';
import Image from 'next/image'

function Login() {

    const [displaySignUp, setDisplaySignUp] = useState(false)
    const [displaySignIn, setDisplaySignIn] = useState(false)

    //fait apparaitre les modals du Sign Up / Sign In
 const popSignUp = () => {
    if(setDisplaySignUp(true)){}
 }
 const popSignIn = () => {
    if(setDisplaySignIn(true)){}
 }

    return (
        <div className={styles.container}>

            <div className={styles.leftcontainer}>
            <Image
      src="/background2.jpg"   
      layout='fill'
      alt="background"
    />
            </div>

            <div className={styles.rightcontainer}>            
                <img src="logo.png" alt="Logo" className={styles.logo} />
                <div > See what's happening </div>
                <button id="signup" onClick={() => popSignUp()}>Sign Up</button>
                <div> Already have an account ?</div>  
                <button id="signup" onClick={() => popSignIn()}>Sign In</button>    
            </div>

        </div >
    );
}

export default Login;