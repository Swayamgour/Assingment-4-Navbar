// import * as React from "react";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import Slide from "@mui/material/Slide";
// import "./Login.css";
// import { Link } from "react-router-dom";



// export default function Signup() {
//   const [open, setOpen] = React.useState(false);
//   const [fullName, setFullName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [checkbox, setCheckbox] = React.useState(false);
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//    function handleSubmit(e) {
//     e.preventDefault();
//     if (email && password ) {


//       setFullName("");
//       setEmail("");
//       setPassword("");
//       setOpen(false);
//     }
//   }

//   return (
//     <div>
//       <p onClick={handleClickOpen}>Login</p>
//       <Dialog
//         open={open}
//         keepMounted
//         onClose={handleClose}
//         aria-describedby="alert-dialog-slide-description"
//       >
//         <DialogTitle>
//           {
//             <div className="heading">
//               <h3>Sign In</h3> <h4 onClick={handleClose}>X</h4>
//             </div>
//           }
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText
//             id="alert-dialog-slide-description"
//             className="dialogbox"
//           >
//             <form onSubmit={handleSubmit} className="signupform">

//               <input
//                 type="text"
//                 value={email}
//                 placeholder="Email"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="password"
//                 value={password}
//                 placeholder="password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <button>Create account</button>
//             </form>

//           </DialogContentText>
//         </DialogContent>
//         <DialogActions></DialogActions>
//       </Dialog>
//     </div>
//   );
// }



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
            alert("you email is valid ")
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
