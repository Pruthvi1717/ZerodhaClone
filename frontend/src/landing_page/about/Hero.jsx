import React from "react";

export default function Hero() {
  return (
    <>
      <div className="container">
        <div classname="row mb-5">
          <h3 style={{ marginTop: "120px" }} className="fs-4 text-center">
            We pioneered the discount broking model in India.
          </h3>
          <h3 className="fs-4 text-center">
            Now, we are breaking ground with our technology.
          </h3>
        </div>

        <div className="row mt-5 border-top text-muted fs-6">
          <div className="col-1"></div>
          <div className="col-md-5 p-5" style={{}}>
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier. <br /> <br />
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India. <br />
              <br />
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="col-md-5 p-5 mb-5">
            <p style={{ textAlign: "justify" }}>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.{" "}
              <br />
              <br />
              Rainmatter, our fintech fund and incubator, has invested in
              several fintech startups with the goal of growing the Indian
              capital markets. <br />
              <br />
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us or learn more about our business and product{" "}
              <a href="" style={{ textDecoration: "none" }}>
                philosophies
              </a>
              .
            </p>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row text-muted ">
          <h3 className="fs-4 text-center">People</h3>
          <div className="col-1"></div>
          <div className="col-md-5 mt-5 " style={{ textAlign: "center" }}>
            <img
              style={{ borderRadius: "50%", width: "60%" }}
              src="media\images\nithinKamath.jpg"
              alt=""
            />

            <h4 className="fs-5" style={{marginTop:"15px"}}>Nithin Kamath</h4>
            <h5 className="fs-6">Founder, CEO</h5>
          </div>
          
          <div className="col-md-5 mt-5">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry. <br /><br /> He
            is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC). <br /><br /> Playing basketball is
            his zen. Connect on Homepage / TradingQnA / Twitter
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}
