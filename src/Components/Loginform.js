import React, { useState } from "react";

const Loginform = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let formIsValid = true;

    if (username.trim() === "") {
      setErrors({ ...errors, username: "Username is required" });
      formIsValid = false;
    } else if (username.length < 8) {
      setErrors({
        ...errors,
        username: "Username must be at least 8 characters",
      });
      formIsValid = false;
    }

    if (password.trim() === "") {
      setErrors({ ...errors, password: "Password is required" });
      formIsValid = false;
    } else if (password.length < 8) {
      setErrors({
        ...errors,
        password: "Password must be at least 8 characters",
      });
      formIsValid = false;
    }

    return formIsValid;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform login logic or API call here
      console.log(data);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Username:</label>
          <input type="text"
            name="username"
            value={username}
            onChange={changeHandler}
          />
          <span style={{ color: "red" }}>{errors.username}</span>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
          <span style={{ color: "red" }}>{errors.password}</span>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Loginform;
