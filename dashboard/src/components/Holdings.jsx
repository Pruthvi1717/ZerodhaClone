import React, { useState, useEffect } from "react";
import "./Holdings.css";
import axios from "axios";
import VerticalGraph from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/allHoldings")
      .then((res) => {
        console.log(res.data);
        setAllHoldings(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
   const data={
      labels: allHoldings.map((holding) => holding.name),
    datasets: [
      {   
        label: "Holdings",
        data: allHoldings.map((holding) => holding.price),
        backgroundColor: "green",
      },
    ],
   }
  return (
    <div className="holdings-container">
      <h3 className="holdings-title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table className="holdings-table">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="summary">
        <div>
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div>
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div>
          <h5 className="profit">
            1,553.40 <span>(+5.20%)</span>
          </h5>
          <p>P&amp;L</p>
        </div>
      </div>
      <VerticalGraph data={data} />;
    </div>
  );
};

export default Holdings;
