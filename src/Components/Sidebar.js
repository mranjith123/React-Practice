import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
function CustomAppBar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        {/* AppBar on the top */}
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Homepage
            </Typography>
            {/* Logs and ALM tabs without gap */}
            <Tabs value={0} aria-label="basic tabs">
              <Tab label="Logs" sx={{ minWidth: 'auto' }} />
              <Tab label="ALM" sx={{ minWidth: 'auto' }} />
            </Tabs>
          </Toolbar>
        </AppBar>
      </Box>

      <Grid container spacing={2} sx={{ padding: 2 }}>
        {/* Left side: AL and Asset Services with horizontal line */}
        <Grid item xs={3}>
          <Button sx={{ textTransform: 'none', textDecoration: 'underline' }}>AL</Button>
          <Button sx={{ textTransform: 'none', display: 'block' }}>Asset Services</Button>
          <Divider sx={{ mt: 2 }} />
        </Grid>

        {/* Right side: Two boxes (removed ALM header) */}
        <Grid item xs={9}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth label="Box 1" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Box 2" variant="outlined" />
            </Grid>
          </Grid>

          {/* Horizontal line above the bottom section */}
          <Divider sx={{ mt: 2, mb: 2 }} />

          {/* Bottom section with file upload and buttons */}
          <Paper style={{ width: 160, height: "100vh" }}>
        <Tabs orientation="vertical">
         
          <Tab label="Upload File"style={{color:"green"}}/>
          <Tab label="file2"/>
          <Tab label="file3"/>
          
        </Tabs>
      </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default CustomAppBar;
