


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
        <div>
            <img src="logo" alt="Logo" />
            <h2>Create your Hackatweet account</h2>
            <input type="text" placeholder="Firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => handleSignUp()}>Sign Up</button>
        </div>
    );
};


export default SignUp;