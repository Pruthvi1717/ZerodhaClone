import React from "react";

export default function Awards() {
  return (
    <div className="container ">
      <div className="row align-items-center">
        {/* Image section */}
        <div className="col-lg-6 col-sm-12 mb-4 mb-lg-0 mb-sm-5 text-center p-5">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Stock Broker"
            className="img-fluid"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>

        {/* Text section */}
        <div className="col-lg-6 col-sm-12  text-lg-start p-5">
          <h1 >Largest Stock Broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency Derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" alt="" style={{width:"90%"}} />
        </div>
      </div>
    </div>
  );
}
