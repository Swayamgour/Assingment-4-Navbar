import * as React from "react";
import { useEffect, useState } from 'react'
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import '../Login/Login.css'
import { ValidEmail, validatPassword, validusername } from '../../Helper'
import { Link } from "react-router-dom";



export default function Signup() {
    const [open, setOpen] = React.useState(false);
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [username, setusername] = useState("");
    const [message, setMessage] = useState("");
    const [pwmessage, setPwMessage] = useState("");
    const [uMes, setUMes] = useState("");
    const [data, setData] = useState([])
   
    // useEffect(() => {
    //     if (localStorage.getItem('list')) {
    //         let data1 = JSON.parse(localStorage.getItem('list'));
    //         setData(data1);
    //     }
    // }, [])

    
    

    const UserNAme1 = (e) => {
        setusername(e.target.value)
        const validation = validusername(username)
        setUMes(validation)
    }

    const handelClickInput = (e) => {
        // alert()
     setEmail(e.target.value)
         const validation  = ValidEmail(email)
        setMessage(validation)
    }

    const userPassword = (e) => {
        console.log(e.target.value)

        setPassword(e.target.value)
        const validation = validatPassword(password)
        setPwMessage(validation)
    }
    const Submit = () => {
        if (message === "true" && uMes === "true" && pwmessage === "true") {
            const obj = {
                name: username,
                password: password,
                email: email,
            };
            data.push(obj)
            setData([...data])
            localStorage.setItem("list", JSON.stringify(data))
            alert("Congratulations! You have successfully signed up!  🎉");
          
        } else {
            alert("Enter correct Ditial")
        }

    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    function handleSubmit(e) {
        e.preventDefault();
        if (email && password && username) {


            setusername("");
            setEmail("");
            setPassword("");
            setOpen(false);
        }
    }

    return (
        <div>
            <p onClick={handleClickOpen}>Registration</p>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    {
                        <div className="heading">
                            <h3>Sign Up</h3> <h4 onClick={handleClose}>X</h4>
                        </div>
                    }
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        id="alert-dialog-slide-description"
                        className="dialogbox"
                    >
                        <form onSubmit={handleSubmit} className="signupform">
                            <input
                                type="text"
                                value={username}
                                placeholder="FullName"
                                onChange={UserNAme1}
                            />{uMes}
                            <input
                                type="text"
                                value={email}
                                placeholder="Email"
                                onChange={handelClickInput}
                            />{message}
                            
                            <input
                                type="password"
                                value={password}
                                placeholder="password"
                                onChange={userPassword}
                            />{pwmessage}

                            <button onClick={Submit}>Create account</button>
                        </form>

                    </DialogContentText>
                </DialogContent>
                <DialogActions></DialogActions>
            </Dialog>
        </div>
    );
}
