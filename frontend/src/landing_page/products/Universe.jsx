import React from "react";

export default function Universe() {
  const partners = [
    {
      name: "Zerodha Fund House",
      img: "media/images/zerodhaFundhouse.png",
      desc: "Our asset management venture creating simple and transparent index funds to help you save for your goals.",
    },
    {
      name: "Sensibull",
      img: "media/images/sensibullLogo.svg",
      desc: "Options trading platform that lets you create strategies, analyze positions, and view market data like open interest and FII/DII flows.",
    },
    {
      name: "GoldenPi",
      img: "media/images/goldenpiLogo.png",
      desc: "Platform offering curated bonds and fixed-income products to help you diversify and earn stable returns.",
    },
    {
      name: "Streak",
      img: "media/images/streakLogo.png",
      desc: "Systematic trading platform that lets you create, backtest, and deploy strategies — no coding required.",
    },
    {
      name: "Smallcase",
      img: "media/images/smallcaseLogo.png",
      desc: "Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.",
    },
    {
      name: "Ditto",
      img: "media/images/dittoLogo.png",
      desc: "Personalized advice on life and health insurance — no spam, no mis-selling.",
    },
  ];

  return (
    <div className="container text-center mt-5">
      {/* Header */}
      <h3 className="fw-semibold mt-4">The Zerodha Universe</h3>
      <p className="text-muted fs-6 mb-5">
        Extend your trading and investment experience even further with our
        partner platforms.
      </p>

      {/* Partner Grid */}
      <div className="row justify-content-center">
        {partners.map((p, index) => (
          <div key={index} className="col-6 col-md-4 p-4 d-flex flex-column align-items-center">
            <img
              src={p.img}
              alt={p.name}
              style={{
                width: "8rem",
                height: "auto",
                filter: "grayscale(100%)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
              onMouseOut={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
            />
            <p className="text-muted small mt-3" style={{ maxWidth: "250px" }}>
              {p.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        className="btn btn-primary mt-4 mb-5 px-4 py-2 fs-6"
        style={{ borderRadius: "6px" }}
      >
        Sign up now
      </button>
    </div>
  );
}
