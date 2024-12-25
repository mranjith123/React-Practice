import React from 'react';
import {Typography} from "@mui/material";

const Typometer= () => {
  return (
    <div>
   <Typography 
   variant="h1" 
   style={{
  color:"red" ,
  border: "1px solid green",
  borderRadius: "10px",
  textAlign: "center",
  padding:"10px",
  marginTop:"40px",
   }}>Hello this is material ui</Typography>
   </div>
  )
}

export default Typometer;