// rafce 
import { TextField, Typography,Button } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div>
      <h1>heloooo</h1>
      <input type="text"placeholder='username' />
      <br />
      <input type="text" placeholder='password' />
      <br />
      <button>Login</button>
      <br /><br /><br /><br />
      <Typography variant='h5'>login page</Typography>
      <TextField variant='outlined' label="username"/>
      <TextField  label="Outlined" variant="outlined" />&nbsp;
      <TextField  label="Fille" variant="filled" />&nbsp;
      <TextField  label="Standar" variant="standard" />&nbsp;
      <br /><br />
      <Button variant="text">Tex</Button>
<br /><br /><Button variant="contained">Contained=</Button>
{/* &nbsp to create a small gap between botton  */}
<br /><br />

    </div>
  )
}

export default First
