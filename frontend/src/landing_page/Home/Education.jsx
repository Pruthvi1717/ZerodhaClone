import React from "react";

export default function Education() {
  return (
    <div className="container mt-5 px-3 px-lg-5 mb-5">
      <div className="row align-items-center">
       
        <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "60%",
              display:"flex",
              
             }}
          />
        </div>

        {/* RIGHT - Text */}
        <div className="col-lg-6 col-12">
          <h3 className="fw-bold mb-3" style={{ color: "#222" }}>
            Free and open market education
          </h3>
          <p className="text-muted mb-2">
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a
            href="#"
            className="fw-semibold text-decoration-none"
            style={{ color: "#387ed1", transition: "color 0.2s ease" }}
            onMouseOver={(e) => (e.target.style.color = "#245a8d")}
            onMouseOut={(e) => (e.target.style.color = "#387ed1")}
          >
            varsity <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>

          <div className="my-4"></div>

          <p className="text-muted mb-2">
            TradingQ&A, the most active trading and investment community in India for all your market-related queries.
          </p>
          <a
            href="#"
            className="fw-semibold text-decoration-none"
            style={{ color: "#387ed1", transition: "color 0.2s ease" }}
            onMouseOver={(e) => (e.target.style.color = "#245a8d")}
            onMouseOut={(e) => (e.target.style.color = "#387ed1")}
          >
            TradingQ&A <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
