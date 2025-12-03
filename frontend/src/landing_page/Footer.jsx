import React from "react";
import "../index.css";

export default function Footer() {
  return (
    <footer
      className="border-top py-4 mt-5"
      style={{
       
        backgroundColor: "#f8f9fa", // light gray background
        fontSize: "0.9rem",
        color: "#6c757d",
      }}
    >
      <div className="container">
        {/* ===== Top Section ===== */}
        <div className="row text-start mb-4">
          <div className="col-md-3 mb-3">
            <img src="media/images/logo.svg" alt="logo" style={{ width: "40%" }} />
            <p className="mt-2">
              &copy; 2010–2025, Noot Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
            <div style={{marginRight:"10px", fontSize:"20px"}}>
            <i class="fa-brands fa-x-twitter" style={{marginRight:"10px"}}></i>
            <i class="fa-brands fa-facebook" style={{marginRight:"10px"}}></i>
            <i class="fa-brands fa-instagram" style={{marginRight:"10px"}}></i>
            <i class="fa-brands fa-linkedin" style={{marginRight:"10px"}}></i>
            
            <br /><hr />
            <i class="fa-brands fa-youtube" style={{marginRight:"10px"}}></i>
            <i class="fa-brands fa-whatsapp" style={{marginRight:"10px"}}></i>

            <i class="fa-brands fa-telegram"></i>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <h6 className="fw-bold text-dark mb-3">Company</h6><br />
            <ul className="list-unstyled d-flex flex-column gap-1">
              <li><a href="#" className="text-decoration-none text-muted">About</a></li><br />
              <li><a href="#" className="text-decoration-none text-muted">Pricing</a></li><br />
              <li><a href="#" className="text-decoration-none text-muted">Referral programme</a></li><br />
              <li><a href="#" className="text-decoration-none text-muted">Careers</a></li><br />
              <li><a href="#" className="text-decoration-none text-muted">Zerodha Tech</a></li><br />
              <li><a href="#" className="text-decoration-none text-muted">Press & media</a></li><br />
              <li><a href="#" className="text-decoration-none text-muted">Zerodha Cares (CSR)</a></li><br />
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h6 className="fw-bold text-dark mb-3">Support</h6><br />
            <ul className="list-unstyled d-flex flex-column gap-1">
              <li><a href="#" className="text-decoration-none text-muted">Contact</a></li><br />
              <li><a href="#" className="text-decoration-none text-muted">Support portal</a></li><br />
              <li><a href="#" className="text-decoration-none text-muted">Z-Connect</a></li><br />
              <li><a href="#" className="text-decoration-none text-muted">List of charges</a></li><br />
              <li><a href="#" className="text-decoration-none text-muted">Downloads & resources</a></li><br />
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h6 className="fw-bold text-dark mb-3">Account</h6><br />
            <ul className="list-unstyled d-flex flex-column gap-1">
              <li><a href="#" className="text-decoration-none text-muted">Open an account</a></li><br />
              <li><a href="#" className="text-decoration-none text-muted">Fund transfer</a></li><br />
              <li><a href="#" className="text-decoration-none text-muted">60-day challenge</a></li><br />
            </ul>
          </div>
        </div>

        {/* ===== Divider ===== */}
        <hr />

        {/* ===== Disclaimer Section ===== */}
        <div className="text-muted small" style={{ lineHeight: "1.6" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633.
            CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.:
            IN-DP-431-2019. Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025;
            SEBI Registration no.: INZ000038238.
          </p>
          <p>
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>
          <p>
            Investments in securities markets are subject to market risks. Read all related documents carefully before investing.
          </p>
          <p>
            As a business, we don't provide stock tips or advisory services. If you find anyone claiming otherwise, please{" "}
            <a href="#" className="text-decoration-none text-primary">report here.</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
