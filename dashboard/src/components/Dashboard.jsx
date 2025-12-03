import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // -------------------- CHECK LOGIN --------------------
  useEffect(() => {
    fetch("https://stoxly-sqxa.onrender.com/auth/me", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("AUTH CHECK:", data);

        if (data.loggedIn) {
          setUsername(data.user.fullName);
        } else {
          // ⭐ CORRECT REDIRECT FOR RENDER SPA
          window.location.href = "https://stoxlyfront.onrender.com/login";
        }

        setLoading(false);
      })
      .catch((err) => {
        console.log("AUTH ERROR:", err);
        window.location.href = "https://stoxlyfront.onrender.com/login";
      });
  }, []);

  // -------------------- LOADING UI --------------------
  if (loading) {
    return (
      <div className="loading-screen">
        <h2>Loading dashboard...</h2>
      </div>
    );
  }

  // -------------------- DASHBOARD MAIN UI --------------------
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList username={username} />

        <div className="content">
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;
