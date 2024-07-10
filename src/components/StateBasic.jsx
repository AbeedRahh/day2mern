import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasic = () => {
   var [name,setName]=useState("Abeed");
   var [input,setInput]=useState();
//    var [carname,setName]=useState("Ferrari");
   const changeName=()=>{
    console.log("button clicked");
    setName(input);
   }
   const inputHandler=(e)=>{
    console.log(e.target.value);
   setInput(e.target.value);
   }

   
  return (
    <div style={{textalign:'center',marginTop:"5%"}} >
       
      
      <Typography variant='h3'>hello {name} </Typography>
      <TextField  label="Username" variant="outlined" onChange={inputHandler}/><br /><br />
       {/* onchange is an event to get text form textfield  */}
      <Button variant='contained' onClick={changeName}>change</Button>
      {/* <Typography variant='h3'>helle{carname}</Typography> */}
  
     
      

    </div>
  )
}

export default StateBasic
