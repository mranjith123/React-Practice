import React, { useState } from "react";
import "./Practice.css";  // Import the CSS file

const Practice = () => {
  const [projectDetails, setProjectDetails] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    logo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails({
      ...projectDetails,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setProjectDetails({
      ...projectDetails,
      logo: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Created:", projectDetails);
    // Logic to handle the form submission goes here
  };

  return (
    <div className="style">
    <form onSubmit={handleSubmit} className="form">
      <p>Create Project</p>
      <div className="formGroup">
        
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={projectDetails.name}
          onChange={handleInputChange}
          placeholder="Enter project name"
          required
          className="input medium-input"
        />
      </div>

      <div className="formGroup">
        <label>Description</label>
        <textarea
          name="description"
          value={projectDetails.description}
          onChange={handleInputChange}
          placeholder="Enter project description"
          required
          className="textarea medium-input"
        />
      </div>

      <div className="formGroup">
        <label>Start Date</label>
        <input
          type="date"
          name="startDate"
          value={projectDetails.startDate}
          onChange={handleInputChange}
          required
          className="input medium-input"
        />
      </div>

      <div className="formGroup">
        <label>End Date</label>
        <input
          type="date"
          name="endDate"
          value={projectDetails.endDate}
          onChange={handleInputChange}
          required
          className="input medium-input"
        />
      </div>

      <div className="formGroup">
        <label>Upload Logo</label>
        <input
          type="file"
          name="logo"
          accept="image/*"
          onChange={handleFileChange}
          className="input medium-input"
        />
      </div>

      <button type="submit" className="button small-button">
        Create Project
      </button>
    </form>
    </div>
  );
};

export default Practice;
