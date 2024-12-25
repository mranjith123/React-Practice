import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
  Box,
  CssBaseline,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Mediaqueriesmaterialui= () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle drawer state
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Drawer contents for mobile
  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Home", "Products", "About", "Login", "Signup"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      {/* AppBar for Navbar */}
      <AppBar position="static">
        <Toolbar>
          {/* Left side: Brand title */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Navbar
          </Typography>

          {/* Hidden on larger screens, visible on smaller screens */}
          <IconButton
            color="inherit"
            edge="start"
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Drawer for mobile navigation */}
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawerList()}
          </Drawer>

          {/* Visible on larger screens */}
          <Grid container spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Grid item>
              <Button color="inherit">Home</Button>
            </Grid>
            <Grid item>
              <Button color="inherit">Products</Button>
            </Grid>
            <Grid item>
              <Button color="inherit">About</Button>
            </Grid>
            <Grid item>
              <Button color="inherit">Login</Button>
            </Grid>
            <Grid item>
              <Button color="inherit">Signup</Button>
            </Grid>
          </Grid>

          {/* Shopping Cart Icon (Always Visible) */}
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Mediaqueriesmaterialui;
