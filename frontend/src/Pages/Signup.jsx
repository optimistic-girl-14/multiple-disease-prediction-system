import React, { useState } from "react";
import '../Pages/css/Signup.css';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { app } from "../Firebase";

const auth = getAuth(app);

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const createUser = () => {
      createUserWithEmailAndPassword(auth, email, password).then(value => alert("Success"));
    };
  return (
    <div className="signup-page">
    <h1>Signup Here :)</h1>
    <label>Email</label>
    <input
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      type=" Enter your email"
      required
      placeholder="Enter your email here"
    />

    <label>Password</label>
    <input
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      type=" Enter your password"
      required
      placeholder="Enter your Password here"
    />
    <button onClick={createUser}>Signup</button>
  </div>
);
  
}

export default Signup
