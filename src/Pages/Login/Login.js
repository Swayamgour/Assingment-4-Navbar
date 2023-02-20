import React from 'react'
import style from './Login.module.css'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { AiOutlineClose } from "react-icons/ai";



function Left_side() {
    const [open, setOpen] = React.useState(false);

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handelClick=()=>{
        setOpen(false)
    }


    return (
        <>
            <div className={style.position}>
                <div className={style.button}>
                    <Button style={{ width: "auto", height: "25%",  backgroundColor: "white", color: "black" }} onClick={handleClickOpen}>
                       Login
                    </Button>
                    <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >

                        <DialogActions style={{ width: '25rem', height: '18rem' }} >

                            <div className={style.centerDialbox}>
                            <span className={style.booking}> <h2 onClick={handelClick}><AiOutlineClose/></h2> <h2 >Booking .com</h2></span>
                                    <h3 className={style.signup}>Sign in or create an account</h3> 
                                <div className={style.center}> 
                                    <input className={style.inputbox} placeholder='Email '/>
                                 
                                    <input className={style.inputbox} placeholder="password"/>
                            
                                    <button  className={style.button_}>Submit</button>
                              <h6 style={{marginLeft:'2rem' , marginTop:'2rem'}}>By signing in or creating an account, you agree with our Terms & conditions and Privacy statement</h6>

                                </div>
                            </div>

                        </DialogActions>
                    </BootstrapDialog>
                </div>
                <div className={style.profilediv} >
                </div>
            </div>

        </>
    )
}


export default Left_side;