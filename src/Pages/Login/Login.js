import React, { useState } from "react"
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Restriction/firebase";
import { useNavigate } from "react-router-dom"



const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const nav = useNavigate()

    const handleChangeemail = e => {
        setEmail(e.target.value)
    }
    const handleChangePassword = e => {
        setPassword(e.target.value)

    }
    const navigate = useNavigate()
    const login = async () => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/Home");
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      };


    return (
        <div className="main">
            <div className="login">
                <h1>Login</h1>
                <input type="email" name="email" value={email} onChange={handleChangeemail} placeholder="Enter your Email"></input>
                <input type="password" name="password" value={password} onChange={handleChangePassword} placeholder="Enter your Password" ></input>
                <div className="button" onClick={login}>Login</div>
                <div>or</div>
                <div className="button" onClick={() => nav("/Restriction")}>Register</div>

            </div>
        </div>

    )
}

export default Login
