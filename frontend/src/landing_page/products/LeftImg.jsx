export default function LeftImg({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (
    <div className="container mx-auto border-gray-200 mt-5 py-16">
        <br /> <br /> <br />
      <div className="row d-flex align-items-center flex-wrap">
        {/* Left Image */}
        <div className="col-md-6 text-center">
          <img
            src={imageUrl}
            alt={productName}
            className="img-fluid rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            style={{ maxWidth: "90%" }}
          />
        </div>
        
        <div className="col-md-1"></div>
        {/* Right Text */}
        <div className="col-md-5 mt-5 mt-md-0 ps-md-5 text-start">
          <h2 className="text-3xl fw-semibold text-dark mb-4">{productName}</h2>
          <p className="text-secondary lh-lg mb-4" style={{ fontSize: "1.05rem" }}>
            {productDescription}
          </p>

          {/* Links */}
          <div className="d-flex align-items-center mb-4">
            <a
              href={tryDemo}
              className="text-primary fw-semibold me-4 hover:underline"
              style={{textDecoration:"none"}}
            >
              Try Demo →
            </a>
            <a
              href={learnMore}
              className="text-primary fw-semibold hover:underline"
              style={{textDecoration:"none"}}
            >
              Learn More →
            </a>
          </div>

          {/* App Badges */}
          <div className="d-flex align-items-center mt-5 flex-wrap">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Get it on Google Play"
                className="me-3"
                style={{ height: "50px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="Download on App Store"
                style={{ height: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
