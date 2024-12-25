import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
const Nav = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography 
            sx={{ 
              padding: "20px", 
              '&:hover': { color: 'green', cursor: 'pointer' } 
            }}
          >
            Home
          </Typography>
          <Typography 
            sx={{ 
              padding: "20px", 
              '&:hover': { color: 'green', cursor: 'pointer' } 
            }}
          >
            News
          </Typography>
          <Typography 
            sx={{ 
              padding: "20px", 
              '&:hover': { color: 'green', cursor: 'pointer' } 
            }}
          >
            About
          </Typography>
          <Typography 
            sx={{ 
              padding: "20px", 
              '&:hover': { color: 'green', cursor: 'pointer' } 
            }}
          >
            Details
          </Typography>

          <Button 
            sx={{ marginLeft: "auto", color: 'white' }} 
            color="warning" 
            startIcon={<LoginIcon />}
          >
            Login
          </Button>
          <Button 
            sx={{ marginLeft: "40px", color: 'white' }} 
            color="warning" 
            startIcon={<AssignmentIndIcon />}
          >
            Sign
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
