import React from 'react'
import {Button} from "@mui/material";
const Buttons = () => {
  return (
    <div>
        <Button  onClick={()=>alert("this is button in material ui")} color="success" sx={{margin:3}}size="large" variant="contained">First</Button>
        <Button onClick={()=>alert("this is button in material ui")} color="error" sx={{margin:3}} size="medium" variant="outlined">Second</Button>
        <Button   onClick={()=>alert("this is button in material ui")} color="info"  sx={{margin:3}} size ="small"variant="text">Third</Button>
    </div>
  )
}

export default Buttons