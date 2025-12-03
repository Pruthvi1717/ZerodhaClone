import React, { useState } from "react";
import "./login.css";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alertMsg, setAlertMsg] = useState(null);
  const [alertType, setAlertType] = useState(null);

  const showAlert = (type, msg) => {
    setAlertType(type);
    setAlertMsg(msg);

    setTimeout(() => {
      setAlertMsg(null);
    }, 2500);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://stoxly-sqxa.onrender.com/auth/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      showAlert("success", "Login successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "https://stoxlydashboard.onrender.com/login";  
      }, 1200);
    } else {
      showAlert("error", data.msg);
    }
  };

  return (
    <div className="login-page">

      {/* 🔥 Inline alert above card */}
      {alertMsg && (
        <div className={`login-alert ${alertType}`}>
          {alertMsg}
        </div>
      )}

      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Login to continue your trading journey</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          
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
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="login-footer-text">
          Don't have an account? <a href="/signup">Create one</a>
        </p>
      </div>
    </div>
  );
}
