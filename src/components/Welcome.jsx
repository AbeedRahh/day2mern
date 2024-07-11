import { Typography ,Button} from '@mui/material'
import React, { useState } from 'react'

const Welcome = () => {
    var [text,setText]=useState("HOME");
   
    var changeText1=()=>{
      console.log("home button clicked");
      setText("Home");
    }
    var changeText2=()=>{
      console.log("settings button clicked");
        setText("Settings");
      }
      var changeText3=()=>{
        console.log("about us button clicked");
        setText("About Us");
      }
  return (
    <div>
     
     <Typography variant='h5'> Welcome to {text}</Typography>
    
     <Button variant='contained' onClick={changeText1}>home</Button>&nbsp;
     <Button variant='contained' onClick={changeText2}>settings</Button>&nbsp;
     <Button variant='contained' onClick={changeText3}>about us</Button>&nbsp;
    </div>
  )
}

export default Welcome
