import React, { useState } from "react"
import "./Login.css";
import { isLoginAtom } from "../../Recoil";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom"



const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const[islog , setIslog]=useRecoilState(isLoginAtom)

    const nav = useNavigate()
    let person = JSON.parse(localStorage.getItem("person"))

    const handleChangeemail = e => {
        setEmail(e.target.value)
    }
    const handleChangePassword = e => {
        setPassword(e.target.value)

    }

    const login =()=> {
         let MatchData = person.filter((x)=>x.email==email && x.password == password)
        if (MatchData.length > 0) {
            alert(" Login Successfull .✅")
            setIslog(!islog)
            nav('/Home')
        }
        else if (email === "") {
            alert("please fill Email fild ⚠️")
        }
        else {
            alert("register First")
        }
    }


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
