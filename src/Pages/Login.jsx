import React from 'react'
import {Grid,TextField,Button} from '@mui/material';
import loginimg from "../assets/loginimg.webp"
import login from "../assets/googlelogin.webp"
import Headingregi from '../component/Headingregi';

const Login = () => {
  return (
    <Grid container spacing={2}>

        <Grid item xs={6}>
         <div className='regicontainer'>
           <Headingregi className="regiheading" title= "Login to your account!"/>

           <img className='logimg' src={login}/>
            <div className='textinput'>
                <TextField id="outlined-basic" label="Email address" variant="outlined" />             
            </div> 

           <div className='textinput'>
               <TextField id="outlined-basic" label="Password" variant="outlined" />
           </div>

           <div className='buttonlog'>
           <Button variant="contained">Login to Continue</Button>
           </div>

         </div>
        </Grid>

        <Grid item xs={6}>
         <img className='loginimg' src={loginimg}/>
        </Grid>

    </Grid>
       
  )
}

export default Login