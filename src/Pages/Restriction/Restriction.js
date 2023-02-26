// import * as React from "react";
// import { useEffect, useState } from 'react'
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import Slide from "@mui/material/Slide";
// import { ValidEmail, validatPassword, validusername } from '../../Helper'
// import { json, Link, useNavigate } from "react-router-dom";
// import { isLoginAtom } from "../../Recoil";
// import { useRecoilState } from "recoil";
// import axios from 'axios' 



// export default function Signup() {
//    const nav = useNavigate()
//     const [open, setOpen] = React.useState(true);
//     const [password, setPassword] = useState('')
//     const [email, setEmail] = useState('')
//     const [username, setusername] = useState("");
//     const [message, setMessage] = useState("");
//     const [pwmessage, setPwMessage] = useState("");
//     const [uMes, setUMes] = useState("");
//      const [totalUsers , setTotalUsers] = useState([])

//     const[data, setData] = useRecoilState(isLoginAtom)
   
//     useEffect(() => {
//         let isLoginData = JSON.parse(localStorage.getItem("loginUserdata"))
//          let totalusers = JSON.parse(localStorage.getItem("totalUsers")) || []
//         if(isLoginData){
//             setData(isLoginData)
//         }
//         if(totalusers?.length>0){
//             setTotalUsers(totalusers)
//         }
//         else{
//             localStorage.setItem("totalUsers" , JSON.stringify([]))
//         }
//     }, [])
   
    
    

//     const UserNAme1 = (e) => {
//         setusername(e.target.value)
//         const validation = validusername(username)
//         setUMes(validation)
//     }

//     const handelClickInput = (e) => {
//      setEmail(e.target.value)
//          const validation  = ValidEmail(email)
//         setMessage(validation)
//     }

//     const userPassword = (e) => {
//         console.log(e.target.value)

//         setPassword(e.target.value)
//         const validation = validatPassword(password)
//         setPwMessage(validation)
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (message === "true" && uMes === "true" && pwmessage === "true") {
//             const obj = {
//                 name: username,
//                 password: password,
//                 email: email,
//             };
//             setData(obj)
//             localStorage.setItem("loginUserdata", JSON.stringify(obj))
//             localStorage.setItem("totalUsers", JSON.stringify([obj,...totalUsers]))

//             alert("Congratulations! You have successfully signed up!  🎉");
//             // const {name , email,password} = data
//             axios.post("http://localhost:9002/Restriction" , obj)
//             .then((res)=>console.log(res))
//           setData(true)
//           nav('/Home')
//         } else {
//             alert("Enter correct Ditial")
//         }
//         if (email && password && username) {


//             setusername("");
//             setEmail("");
//             setPassword("");
//             setOpen(false);
//         }

//     }
//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };
   

//     return (
//         <div>
//             <p onClick={handleClickOpen}>Registration</p>
//             <Dialog
//                 open={open}
//                 keepMounted
//                 onClose={handleClose}
//                 aria-describedby="alert-dialog-slide-description"
//             >
//                 <DialogTitle>
//                     {
//                         <div className="heading">
//                             <h3>Sign Up</h3> <h4 onClick={handleClose}>X</h4>
//                         </div>
//                     }
//                 </DialogTitle>
//                 <DialogContent>
//                     <DialogContentText
//                         id="alert-dialog-slide-description"
//                         className="dialogbox"
//                     >
//                         <form onSubmit={handleSubmit} className="signupform">
//                             <input
//                                 type="text"
//                                 value={username}
//                                 placeholder="FullName"
//                                 onChange={UserNAme1}
//                             />{uMes}
//                             <input
//                                 type="text"
//                                 value={email}
//                                 placeholder="Email"
//                                 onChange={handelClickInput}
//                             />{message}
                            
//                             <input
//                                 type="password"
//                                 value={password}
//                                 placeholder="password"
//                                 onChange={userPassword}
//                             />{pwmessage}

//                             <button>Create account</button>
//                         </form>

//                     </DialogContentText>
//                 </DialogContent>
              
//             </Dialog>
//         </div>
//     );
// }




import React, { useState } from "react"
 import "../../Pages/Restriction/Restriction.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Restriction = () => {

    const nav = useNavigate()
   
// console.log(emailvalid)
const [data , setData] =useState([])
    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

 const emailvalid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    const register = () => {
        // nav('/Home')
        const { name, email, password, reEnterPassword } = user
        if( name && (email) && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/Restriction", user)
            .then( res => {
                  alert(res.data.message)
                 nav('/Login')
                 data.push(user)
                 setData([...data])
                 localStorage.setItem("person" , JSON.stringify(data))
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="main">
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="email" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => nav("/Login")}>Login</div>
        </div>
        </div>
    )
}

export default Restriction;