import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import "./WatchList.css";
import "../index.css";
import DoughnutChart from "./DoughnutChart";

import GeneralContext from "./GeneralContext";
import { Doughnut } from "react-chartjs-2";

const WatchList = () => {
  const [activeUid, setActiveUid] = useState(null);
  
  const data={
     labels : watchlist.map((stock) => stock.name),
    datasets: [
      {         
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [    
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",  
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",  
        ],
        borderColor: [      
          "rgba(255, 99, 132, 1)",  
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",  
          "rgba(75, 192, 192, 1)",  
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",  
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: INFY, BSE, Nifty Fut Weekly"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem
            key={index}
            stock={stock}
            isActive={activeUid === stock.name}
            onHover={() => setActiveUid(stock.name)}
            onLeave={() => setActiveUid(null)}
          />
        ))}
      </ul>

     <DoughnutChart data={data} /> 
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, isActive, onHover, onLeave }) => {
  return (
    <li className="watchlist-item" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDownIcon className="down" />
          ) : (
            <KeyboardArrowUpIcon className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>

        {isActive && <WatchListActions uid={stock.name} />}
      </div>
    </li>
  );
};

// ⭐ FIXED WatchListActions
const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext); // 👈 GET FUNCTION

  return (
    <div className="actions" id={`actions-${uid}`}>
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className="buy" onClick={() => openBuyWindow(uid)}>
          B
        </button>
      </Tooltip>

      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button className="sell">S</button>
      </Tooltip>

      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="btn icon-btn">
          <BarChartOutlinedIcon />
        </button>
      </Tooltip>

      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="btn">More</button>
      </Tooltip>
    </div>
  );
};
