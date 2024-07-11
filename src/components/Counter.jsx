import {  Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [num,setChange]=useState(0)
var add=()=>{
  setChange(num+1);
}
var reduce=()=>{
  setChange(num-1);
}
var reset=()=>{
  setChange(0);
}
  return (
    <div>
      <br /><br /><br />
      <Typography variant='h5' >{num}</Typography>
      <br /><br /><br />
      <Button variant='contained' onClick={add}>+1</Button>&nbsp;
      <Button variant='contained' onClick={reset}>reset</Button>&nbsp;
      <Button variant='contained' onClick={reduce}>-1</Button>&nbsp;
    </div>
  )
}

export default Counter
