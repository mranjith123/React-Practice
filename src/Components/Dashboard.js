import React, { useState } from "react";
import {
  TextField,
  Grid,
  Button,
  Box,
  InputLabel,
  Paper,
  Typography,
} from "@mui/material";

const initialValue = {
  name: "",
  description: "",
  startDate: "",
  endDate: "",
  logo: null,
};

const Dashboard = () => {
  const [formValues, setFormValues] = useState(initialValue);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = "Name is required.";
    if (!formValues.description) tempErrors.description = "Description is required.";
    if (!formValues.startDate) tempErrors.startDate = "Start date is required.";
    if (!formValues.endDate) tempErrors.endDate = "End date is required.";
    if (!formValues.logo) tempErrors.logo = "Logo is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formValues);
      alert("Form submitted successfully!");
      setFormValues(initialValue); // Reset form values after submission
      setErrors({}); // Clear validation errors
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "logo") {
      setFormValues({ ...formValues, [name]: e.target.files[0] }); // Handling file input
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        sx={{
          padding: "40px", // Padding inside the box
          margin: "auto",
          border: "1px solid black", // Outside border
          borderRadius: "8px", // Rounded corners for the box
          gap: "20px", // Gap between elements
          width: "400px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow for slight elevation
        }}
      >
        <form onSubmit={submitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component="h3" variant="h6" sx={{ textAlign: "left" }}>
                Create Project
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <InputLabel>Name</InputLabel>
              <TextField
                fullWidth
                name="name"
                variant="outlined"
                size="small"
                value={formValues.name}
                onChange={changeHandler}
                error={!!errors.name}
                helperText={errors.name}
                multiline // Allows enter (multi-line input)
                rows={2} // Allows 2 lines of text
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel>Description</InputLabel>
              <TextField
                fullWidth
                name="description"
                variant="outlined"
                size="small"
                value={formValues.description}
                onChange={changeHandler}
                error={!!errors.description}
                helperText={errors.description}
                multiline // Allows enter (multi-line input)
                rows={3} // Allows 3 lines of text
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel>Start Date</InputLabel>
              <TextField
                fullWidth
                type="date"
                name="startDate"
                variant="outlined"
                size="small"
                value={formValues.startDate}
                onChange={changeHandler}
                error={!!errors.startDate}
                helperText={errors.startDate}
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel>End Date</InputLabel>
              <TextField
                fullWidth
                type="date"
                name="endDate"
                variant="outlined"
                size="small"
                value={formValues.endDate}
                onChange={changeHandler}
                error={!!errors.endDate}
                helperText={errors.endDate}
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel>Upload Logo</InputLabel>
              <TextField
                fullWidth
                type="file"
                name="logo"
                inputProps={{ accept: "image/*" }}
                onChange={changeHandler}
                error={!!errors.logo}
                helperText={errors.logo}
              />
            </Grid>

            <Grid item xs={6} sx={{ textAlign: "left" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="small"
              >
                Create Project
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Dashboard;
