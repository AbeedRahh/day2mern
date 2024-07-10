import {  Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [num,setChange]=useState("0")
  return (
    <div>
      <Typography variant='h5'>{num}</Typography>
      <Button variant='contained' onClick={changeNum}>+1</Button>
    </div>
  )
}

export default Counter
