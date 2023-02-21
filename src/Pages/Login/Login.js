import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import "./Login.css";
import { Link } from "react-router-dom";



export default function Signup() {
  const [open, setOpen] = React.useState(false);
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checkbox, setCheckbox] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   function handleSubmit(e) {
    e.preventDefault();
    if (email && password ) {
    

      setFullName("");
      setEmail("");
      setPassword("");
      setOpen(false);
    }
  }

  return (
    <div>
      <p onClick={handleClickOpen}>Login</p>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {
            <div className="heading">
              <h3>Sign In</h3> <h4 onClick={handleClose}>X</h4>
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
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
             
              <button>Create account</button>
            </form>
           
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
