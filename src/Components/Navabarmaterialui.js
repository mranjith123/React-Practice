import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CssBaseline,
  IconButton,
  Button,
  Link,
  Box,
} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* AppBar for Navbar */}
      <AppBar position="static">
        <Toolbar>
          {/* Left side: Shopping Cart Icon and buttons */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" aria-label="cart">
              <ShoppingCartIcon />
            </IconButton>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Products</Button>
            <Button color="inherit">About</Button>
          </Box>

          {/* Right side: Login and Signup Links */}
          <Box sx={{ marginLeft: "auto" }}>
            <Link href="#" color="inherit" underline="none" sx={{ marginRight: 2 }}>
              Login
            </Link>
            <Link href="#" color="inherit" underline="none">
              Signup
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Grid container to organize Cards */}
      <Grid container spacing={3} style={{ padding: "20px" }}>
        {/* First card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Card 1</Typography>
              <Typography variant="body2">This is the content of Card 1</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Second card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Card 2</Typography>
              <Typography variant="body2">This is the content of Card 2</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Third card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Card 3</Typography>
              <Typography variant="body2">This is the content of Card 3</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Navbar;
