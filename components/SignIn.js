


function SignIn() {

const [signInUsername, setSignInUsername] = useState('');
const [signInPassword, setSignInPassword] = useState('');



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
                setIsModalVisible(false)
            }
        });
}; 

return (
    <div>
        <img src="logo" alt="Logo" />
        <h2>Connect to Hackatweet </h2>
        <input type="text" placeholder="Firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={() => handleConnection()}>Sign Up</button>
    </div>
);




}