import { Pets ,Mail,Notifications} from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography,MenuItem,Menu } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'



let StyeldToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
});

let Search = styled("div")(({ theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:"5px",
    width:"40%"
    
   
}));

let Icons = styled(Box)(({theme})=>({
    display:"none",
    gap:"25px",
    // [theme.breakpoints.up("sm")]:{
    //     display:"flex"
    // }
    
   
    
}));


let Userbox = styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"10px"
}))



export default function Navbar() {

  let [open,setopen]=useState(false);

  return (
    <AppBar position='sticky'>

    <StyeldToolbar> 

    <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}} >Dharaneesh</Typography>

    <Pets sx={{display:{xs:"block", sm:"none"}}}/>

    <Search><InputBase placeholder='Search'/></Search>

    <Icons sx={{display:{xs:"none", sm:"flex"},marginTop:"5px"}}>

    <Badge badgeContent={4} color="error">
    <Mail/>
    </Badge>

    <Badge badgeContent={4} color="error">
    <Notifications sx={{marginTop:"2px"}}/>
    </Badge>
    <Avatar sx={{width:"30px",height:"30px" ,marginBottom:"4px"}} src='https://www.hindustantimes.com/ht-img/img/2023/07/28/550x309/ffff_1690514468971_1690514480248.png'
    onClick={(e)=>
      setopen(true)}
    />

  </Icons>
  <Userbox sx={{display:{xs:"flex", sm:"none"},marginTop:"5px"}} onClick={(e)=>
    setopen(true)} >
  <Avatar sx={{width:"30px",height:"30px" ,marginBottom:"4px"}} src='https://www.hindustantimes.com/ht-img/img/2023/07/28/550x309/ffff_1690514468971_1690514480248.png'/>

<Typography variant='span'>Captain Miller</Typography>
  </Userbox>
    </StyeldToolbar >

    <Menu
    id="demo-positioned-menu"
    aria-labelledby="demo-positioned-button"
    
    open={open}
    onClose={(e)=>setopen(false)}
    
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
  >
    <MenuItem>Profile</MenuItem>
    <MenuItem>My account</MenuItem>
    <MenuItem>Logout</MenuItem>
  </Menu>
    </AppBar>
  )
}
