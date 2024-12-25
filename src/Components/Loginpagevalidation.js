import React, { useState } from "react";
import "../App.css";
const App = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { username, email, password, confirmPassword } = data;
  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    // Real-time validation
    let errorObj = { ...errors };
    switch (name) {
      case "username":
        errorObj.username =
          value.length < 3 ? "Username must be at least 3 characters long" : "";
        break;
      case "email":
        // Simple email validation regex, not exhaustive
        errorObj.email = !/^\S+@\S+\.\S+$/.test(value)
          ? "Invalid email address"
          : "";
        break;
      case "password":
        errorObj.password =
          value.length < 6 ? "Password must be at least 6 characters long" : "";
        break;
      case "confirmPassword":
        errorObj.confirmPassword =
          value !== password ? "Passwords do not match" : "";
        break;
      default:
        break;
    }
    setErrors(errorObj);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={changeHandler}
          required
        />
        {errors.username && <span className="error">{errors.username}</span>}
        <br />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={changeHandler}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={changeHandler}
          required
        />
        {errors.password && <span className="error">{errors.password}</span>}
        <br />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={changeHandler}
          required
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
