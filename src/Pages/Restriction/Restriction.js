import React, { useState } from "react"
import "../../Pages/Restriction/Restriction.css"
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const Restriction = () => {

    const nav = useNavigate()


    const [displayName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password, displayName)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            nav("/Login")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      };
    
    return (
        <div className="main">
            <div className="register">
                <h1>Register here</h1>
                <input placeholder=" Enter your Name" value={displayName} onChange={(e) => setName(e.target.value)} />
                <input placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder="Enter your Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className="button" onClick={register} >Register</div>
                <div>or</div>
                <div className="button" onClick={() => nav("/Login")}>Login</div>
            </div>
        </div>
    )
}

export default Restriction;