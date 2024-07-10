import { TextField,Button, } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div>
      <TextField variant='outlined' label="Name"/><br /><br />
      <TextField  label="Age" variant="outlined" /><br /><br />
      <TextField  label="Place" variant="outlined" /><br /><br />
      <TextField  label="E-mail" variant="outlined" /><br /><br />
      <TextField  label="Password" variant="outlined"/><br /><br />
      <Button variant="contained">Login</Button>
      
    </div>
  )
}

export default Registration
