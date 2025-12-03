import React, { useState } from "react";
import "./signup.css";

export default function Signup() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [alertMsg, setAlertMsg] = useState(null);
  const [alertType, setAlertType] = useState(null);

  const showAlert = (type, msg) => {
    setAlertType(type);
    setAlertMsg(msg);
    setTimeout(() => setAlertMsg(null), 2500);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://stoxly-sqxa.onrender.com/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      showAlert("success", "Signup successful! Redirecting to login...");

      setTimeout(() => {
        window.location.href = "https://stoxlyfront.onrender.com/login";
      }, 1500);
    } else {
      showAlert("error", data.msg);
    }
  };

  return (
    <div className="signup-page">
      {alertMsg && (
        <div className={`signup-alert ${alertType}`}>{alertMsg}</div>
      )}

      <div className="signup-card">
        <div className="signup-header">
          <h2>Create your account</h2>
          <p>Start your trading journey with us</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p className="signup-footer-text">
          Already have an account?{" "}
          <a href="https://stoxlyfront.onrender.com/login">Login</a>
        </p>
      </div>
    </div>
  );
}
