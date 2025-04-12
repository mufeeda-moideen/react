import React, { useState } from "react";
import "../styles/ExamRegistrationForm.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ExamRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    semester: "",
    admissionNumber: "",
    examRegisterNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.phone === "" ||
      formData.email === "" ||
      formData.semester === "" ||
      formData.admissionNumber === "" ||
      formData.examRegisterNumber === ""
    ) {
      alert("All Fields are Required!");
    } else {
        const response = await axios.post("http://localhost:8080/api/data", formData);
        alert("Form Submitted successfully!");
        console.log("Server response:", response.data);
      }
  };

  return (
    <div className="container">
      <h2>Student Exam Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="semester"
          placeholder="Semester"
          value={formData.semester}
          onChange={handleChange}
        />
        <input
          type="text"
          name="admissionNumber"
          placeholder="Admission Number"
          value={formData.admissionNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="examRegisterNumber"
          placeholder="Exam Register Number"
          value={formData.examRegisterNumber}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
};

export default ExamRegistrationForm;