import React,{useState} from "react";
import {Tabs,Tab,AppBar} from "@mui/material";

const Tabsmaterialui =()=>{
    const [value,setValue] = useState(0);
    return(
        <div>
            <AppBar>
            <Tabs indicatorColor="secondary"  textColor="secondary" value={value} onChange={(e,val)=>setValue(val)}>
               <Tab label="first"/>
               <Tab label="second"/>
               <Tab label="three"/> 
            </Tabs>
            </AppBar>
            
        </div>
    )
}
export default Tabsmaterialui;