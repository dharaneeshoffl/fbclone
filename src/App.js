import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import Rightbar from './Components/Rightbar'
import { Box, Stack, createTheme } from '@mui/material'
import Navbar from './Components/Navbar'
import Add from './Components/Add'
import { ThemeProvider } from 'styled-components'



export default function App() {

  let [mode,setmode]= useState("dark")

  let darktheme = createTheme({
    palette:{
      mode:"light"
    }
  })
  return (

    <ThemeProvider theme={darktheme}>
    
   
    <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">

      <Sidebar setMode={setmode} mode={mode}/>
      <Feed/>
      <Rightbar/>
      <Add/>
      </Stack>
   
    
    </Box>

    </ThemeProvider>
  )
}
