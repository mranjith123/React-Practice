import React, { useState } from "react";

import {
  TextField,
  Grid,
  Button,
  Box,
  InputLabel,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { FaUserAlt, FaKey } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const initialValue = {
  userId: "",
  password: "",
};

const useStyles = makeStyles(() => ({
  root: {
    width: "400px",
    padding: "10px",
  },
  boxStyle: {
    flexDirection: "column",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "93vh",
  },
}));

const LeadPagecode = ({ setLogin }) => {
  const classes = useStyles();
  const [formValues, setFormvalues] = useState(initialValue);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateUserId = (userId) => {
    const re = /^[0-9]{5,10}$/;
    return re.test(userId);
  };

  const validatePassword = (password) => {
    const re = /^.{7,17}$/; // Min 7, Max 17 characters
    return re.test(password);
  };

  const validate = (values) => {
    let error = {};
    if (!validateUserId(values.userId)) {
      error.userId = "User ID is required and must be numeric (5-10 digits).";
    }
    if (!validatePassword(values.password)) {
      error.password =
        "Password must be 7-17 characters and can include special characters, numbers, and letters.";
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    let error = validate(formValues);
    setErrors(error);

    if (Object.keys(error).length === 0) {
      if (formValues.userId === "991188" && formValues.password === "Pass@123") {
        setLogin(true);
        navigate("/admin");
      } else if (
        formValues.userId === "567890" &&
        formValues.password === "Pass@123"
      ) {
        setLogin(true);
        navigate("/homeNocPage");
      } else if (
        formValues.userId === "332211" &&
        formValues.password === "Pass@123"
      ) {
        setLogin(true);
        navigate("/homepagechecker");
      } else {
        setErrors({
          userId: "Invalid credentials",
          password: "Invalid credentials",
        });
      }
    }
  };

  const changeHandler = (e) => {
    setFormvalues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="lead_section">
      <Box className={`${classes.boxStyle} leadloginpage`}>
        <div className="leadlogin-welcome">
          <h2 className="wel_log_in">Welcome to LeadManagement</h2>
          <Typography component="h3" variant="h6">
            Login
          </Typography>
          <Paper className={classes.root}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item sm={1}>
                <FaUserAlt />
              </Grid>
              <Grid item sm={4}>
                <InputLabel>Emp ID</InputLabel>
              </Grid>
              <Grid item sm={5}>
                <TextField
                  fullWidth
                  name="userId"
                  type="text"
                  variant="outlined"
                  size="small"
                  value={formValues.userId}
                  onChange={changeHandler}
                  helperText={errors.userId && errors.userId}
                  error={Boolean(errors.userId)}
                  autoComplete="off"
                />
              </Grid>
              <Grid item sm={2}></Grid>
              <Grid item sm={1}>
                <FaKey />
              </Grid>
              <Grid item sm={4}>
                <InputLabel>Emp Pwd</InputLabel>
              </Grid>
              <Grid item sm={5}>
                <TextField
                  fullWidth
                  type="password"
                  name="password"
                  variant="outlined"
                  size="small"
                  value={formValues.password}
                  onChange={changeHandler}
                  helperText={errors.password && errors.password}
                  error={Boolean(errors.password)}
                  autoComplete="off"
                />
              </Grid>
              <Grid item sm={2}></Grid>
              <Grid item sm={2}>
                <Button
                  onClick={loginHandler}
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="small"
                  className="submit_btnn"
                >
                  SUBMIT
                </Button>
              </Grid>
              <Grid item sm={4}></Grid>
              <Grid item md={7}>
                <a href="/" style={{ marginLeft: "75px" }}>
                  Forget Password
                </a>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Box>
    </div>
  );
};

export default LeadPagecode;
