import React from 'react'
import style from './Dialbox.module.css'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';   
import DialogActions from '@mui/material/DialogActions';


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
 


  return (
    <> 
     <div className={style.position}>
       
    
     

    <div className={style.button}>
    <Button  style={{ marginLeft:".5rem" ,width:"30%",height:"25%",borderRadius:"2rem",backgroundColor:"#6495ED",color:"white"}}  onClick={handleClickOpen}>
        Tweet
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
         
         <DialogActions style={{width:'25rem', height:'20rem'}} >
      
   
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