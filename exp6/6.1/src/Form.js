import React, { useState } from "react";
import "./App.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    address: "",
    state: "",
    skills: []
  });

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value]
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter((skill) => skill !== value)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Form Submitted Successfully!

First Name: ${formData.firstName}
Last Name: ${formData.lastName}
DOB: ${formData.dob}
Gender: ${formData.gender}
Address: ${formData.address}
State: ${formData.state}
Skills: ${
      formData.skills.length > 0
        ? formData.skills.join(", ")
        : "None"
    }`);
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      address: "",
      state: "",
      skills: []
    });
  };

  return (
    <div className="container">
      <div className="card">
        <h2>User Registration</h2>

        <form onSubmit={handleSubmit}>

          {/* First Name */}
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder=" "
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <label>First Name</label>
          </div>

          {/* Last Name */}
          <div className="input-group">
            <input
              type="text"
              name="lastName"
              placeholder=" "
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <label>Last Name</label>
          </div>

          {/* DOB */}
          <div className="input-group">
            <input
              type="date"
              name="dob"
              max={today}
              value={formData.dob}
              onChange={handleChange}
              required
            />
            <label>Date of Birth</label>
          </div>

          {/* Gender */}
          <div className="options">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                required
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>

          {/* Address */}
          <div className="input-group">
            <textarea
              name="address"
              placeholder=" "
              value={formData.address}
              onChange={handleChange}
              required
            />
            <label>Address</label>
          </div>

          {/* State */}
          <div className="input-group">
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              <option value="Gujarat">Gujarat</option>
              <option value="Delhi">Delhi</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Kolkata">Kolkata</option>
            </select>
            <label>State</label>
          </div>

          {/* Skills */}
          <div className="options">
            <label>
              <input
                type="checkbox"
                value="Java"
                checked={formData.skills.includes("Java")}
                onChange={handleSkillChange}
              />
              Java
            </label>

            <label>
              <input
                type="checkbox"
                value="Python"
                checked={formData.skills.includes("Python")}
                onChange={handleSkillChange}
              />
              Python
            </label>

            <label>
              <input
                type="checkbox"
                value="React"
                checked={formData.skills.includes("React")}
                onChange={handleSkillChange}
              />
              React
            </label>
          </div>

          {/* Buttons */}
          <div className="buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Form;