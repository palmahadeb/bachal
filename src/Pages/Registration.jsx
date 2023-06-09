import React from 'react'
import {Grid,TextField,Button} from '@mui/material';
import registration from "../assets/registrationimg.webp"
import Headingregi from '../component/Headingregi';

const Registration = () => {
  return (
    <Grid container spacing={2}>

        <Grid item xs={6}>
         <div className='regicontainer'>
           <Headingregi className="regiheading" title= "Get started with easily register"/>

           <p className='regipara'>Free register and you can enjoy it</p>

            <div className='textinput'>
                <TextField id="outlined-basic" label="Email address" variant="outlined" />             
            </div> 

            <div className='textinput'>
                <TextField id="outlined-basic" label="Full name" variant="outlined" />
           </div>

           <div className='textinput'>
               <TextField id="outlined-basic" label="Password" variant="outlined" />
           </div>

           <div className='buttonregi'>
           <Button variant="contained">Sign up</Button>
           </div>

         </div>
        </Grid>

        <Grid item xs={6}>
         <img className='regiimg' src={registration}/>
        </Grid>

    </Grid>
       
  )
}

export default Registration