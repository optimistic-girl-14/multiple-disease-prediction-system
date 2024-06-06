import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../Firebase';
import './css/LoginSignup.css';

const auth = getAuth(app);

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signinUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // Redirect to the medical page after successful login
                // Pass the user's email as state
                navigate('/medical', { state: { userEmail: email } });
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="Signin-page">
            <h1>Login Here :)</h1>
            <label>Enter your email</label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email here"
            />
            <label>Enter your Password</label>
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter your password here"
            />
            <button onClick={signinUser}>Sign in</button>
        </div>
    );
};

export default Login;
