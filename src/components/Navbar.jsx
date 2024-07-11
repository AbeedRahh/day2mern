import { AppBar, Box, Toolbar,Typography,Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Myapp
          </Typography>
          <Button style={{textDecoration:"none",color:"white"}}>
            <Link to={"/"}>Login</Link></Button>
            <Button style={{textDecoration:"none",color:"white"}}>
            <Link to={"/reg"}>Registration</Link></Button>
            <Button >
            <Link to={"/tab"}style={{color:"white"}}>Table</Link></Button>
            <Button style={{textDecoration:"none",color:"white"}}>
            <Link to={"/s"}>State</Link></Button>
            <Button style={{textDecoration:"none",color:"white"}}>
            <Link to={"/c"}>count</Link></Button>

            <Button style={{textDecoration:"none",color:"white"}}>
            <Link to={"/h"}>Welcome</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
