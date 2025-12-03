import React from "react";

export default function Pricing() {
  return (
    <div className="container p-4 p-lg-5 mt-5">
      <div className="row align-items-center">
        {/* LEFT SECTION */}
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <h2 className="fw-bold mb-3" style={{ color: "#222" }}>Unbeatable pricing</h2>
          <p className="text-muted mb-3">
            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            className="fw-semibold text-decoration-none"
            style={{ color: "#387ed1", transition: "color 0.2s ease" }}
            onMouseOver={(e) => (e.target.style.color = "#245a8d")}
            onMouseOut={(e) => (e.target.style.color = "#387ed1")}
          >
            See pricing <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </div>

        {/* SPACER FOR LG */}
        <div className="col-lg-1 d-none d-lg-block"></div>

        
        <div className="col-lg-7 col-md-12">
          <div className="row g-3">
           
            <div className="col-md-6 col-12">
              <div
                className="d-flex flex-column justify-content-center align-items-center text-center p-4 rounded shadow-sm h-100"
                style={{ backgroundColor: "#f9f9f9", border: "1px solid #e0e0e0" }}
              >
                <h1 className="fw-bold mb-2">₹0</h1>
                <p className="mb-0 text-muted">Free equity delivery and direct mutual funds</p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-md-6 col-12">
              <div
                className="d-flex flex-column justify-content-center align-items-center text-center p-4 rounded shadow-sm h-100"
                style={{ backgroundColor: "#f9f9f9", border: "1px solid #e0e0e0" }}
              >
                <h1 className="fw-bold mb-2">₹20</h1>
                <p className="mb-0 text-muted">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
