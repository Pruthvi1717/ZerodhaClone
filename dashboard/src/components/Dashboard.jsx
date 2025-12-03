import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import VerticalGraph from "./VerticalGraph";

import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // -------------------- CHECK LOGIN --------------------
  useEffect(() => {
    fetch("https://stoxly-sqxa.onrender.com/auth/me", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.loggedIn) {
          navigate("http://localhost:5174/login"); // redirect to frontend login
        } else {
          setUser(data.user.fullName);
        }
      });
  }, []);

  // Loading state (before auth check finishes)
  if (user === null) {
    return (
      <div className="loading-screen">
        <h2>Loading dashboard...</h2>
      </div>
    );
  }

 

  // -------------------- DASHBOARD UI --------------------
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>

        <WatchList />

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
