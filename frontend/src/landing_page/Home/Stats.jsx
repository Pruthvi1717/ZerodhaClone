import React from "react";

export default function Stats() {
  return (
    <div className="container mt-5 mb-5 px-3 px-lg-5">
      <div className="row align-items-center">
        {/* LEFT SECTION - TEXT */}
        <div className="col-lg-6 col-sm-12 mb-5 mb-lg-0">
          <h2 className="fw-bold mb-4" style={{ color: "#222" }}>
            Trust with confidence
          </h2>

          <div className="mb-4">
            <h4 className="fw-semibold mb-2" style={{ color: "#2d2d2d" }}>
              Customer-first always
            </h4>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity
              investments, making us India’s largest broker; contributing to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold mb-2" style={{ color: "#2d2d2d" }}>
              No spam or gimmicks
            </h4>
            <p className="text-muted">
              No gimmicks, spam, “gamification”, or annoying push notifications. High-quality apps
              that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold mb-2" style={{ color: "#2d2d2d" }}>
              The Zerodha universe
            </h4>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer
              you tailored services specific to your needs.
            </p>
          </div>

          <div>
            <h4 className="fw-semibold mb-2" style={{ color: "#2d2d2d" }}>
              Do better with money
            </h4>
            <p className="text-muted mb-0">
              With initiatives like Nudge and Kill Switch, we don’t just facilitate transactions, but
              actively help you do better with your money.
            </p>
          </div>
        </div>

        {/* RIGHT SECTION - IMAGE + LINKS */}
        <div className="col-lg-6 col-sm-12 text-center text-lg-start p-5">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha ecosystem"
            className="img-fluid mb-4 rounded"
            style={{
              width: "100%",
              maxWidth: "550px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          />

          {/* Centered links below the image */}
          <div
            className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-4 "
            style={{
              position: "relative",
              bottom: "10px",
            }}
          >
            <a
              href="#"
              className="text-decoration-none fw-semibold"
              style={{
                color: "#387ed1",
                transition: "color 0.2s ease",
              }}
              onMouseOver={(e) => (e.target.style.color = "#245a8d")}
              onMouseOut={(e) => (e.target.style.color = "#387ed1")}
            >
              Explore our products <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>

            <a
              href="#"
              className="text-decoration-none fw-semibold"
              style={{
                color: "#387ed1",
                transition: "color 0.2s ease",
              }}
              onMouseOver={(e) => (e.target.style.color = "#245a8d")}
              onMouseOut={(e) => (e.target.style.color = "#387ed1")}
            >
              Try Kite demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
