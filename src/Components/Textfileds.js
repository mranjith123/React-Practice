import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const TextFields = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [age, setAge] = useState('');

  const changeHandler = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs, age);
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: 4, 
        marginTop: 3 
      }}
    >
      <form onSubmit={submitHandler}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            name="name"
            value={inputs.name}
            onChange={changeHandler}
            type="text"
            placeholder="Name"
            variant="outlined"
            fullWidth
          />
          <TextField
            name="email"
            value={inputs.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email"
            variant="standard"
            fullWidth
          />
          <TextField
            name="password"
            value={inputs.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            variant="filled"
            fullWidth
          />
        </Box>

        <FormGroup sx={{ marginTop: 3 }}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />

          <FormControl fullWidth sx={{ marginTop: 2 }}>
            <InputLabel id="age-select-label">Age</InputLabel>
            <Select
              labelId="age-select-label"
              id="age-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>

           </Select>


          
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" sx={{ marginTop: 3 }}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
          </FormControl>


          
        </FormGroup>

        <Button 
          type="submit" 
          variant="contained" 
          sx={{ marginTop: 2 }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default TextFields;
