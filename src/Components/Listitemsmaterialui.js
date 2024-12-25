import React,{useState} from "react";
import { List, ListItem, ListItemButton, ListItemText, Box ,Collapse, ListItemIcon} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
const array = ["first", "second", "third", "fourth", "fifth"];

const Listitemsmaterialui = () => {
    const [open,setOpen] = useState(false);
  return (
    <Box>
        <list>
            <ListItem divider>
                <ListItemButton onClick={()=>setOpen(true)}>
                    <ListItemIcon>
                        <HomeIcon />
                        </ListItemIcon>
                <ListItemText primary={"Home data"}/>
                </ListItemButton>
            </ListItem>
        </list>
        <Collapse in={open}>
      <List sx={{ width: 300, background: "lightblue", color: "white" }}>
        {array.map((listElm, index) => (
          <ListItem key={index} divider>
            <ListItemButton onClick={()=>setOpen(false)}>
              <ListItemText primary={listElm} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </Collapse>
    </Box>
  );
};

export default Listitemsmaterialui;
