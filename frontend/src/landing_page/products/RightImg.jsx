export default function RightImg({
  imageUrl,
  productName,
  productDescription,
  learnMore
}) {
  return (
    <div className="container mx-auto border-t border-gray-200 mt-5 py-16">
      <div className="row d-flex align-items-center flex-wrap">
        
        {/* Text Section */}
        <div className="col-md-5 mt-5 mt-md-0 pe-md-5 text-start order-2 order-md-1">
          <h2 className="text-3xl fw-semibold text-dark mb-4">{productName}</h2>
          <p className="text-secondary lh-lg mb-4" style={{ fontSize: "1.05rem" }}>
            {productDescription}
          </p>

          {/* Learn More link */}
          <a
            href={learnMore}
            className="text-primary fw-semibold"
            style={{
              textDecoration: "none",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            Learn More →
          </a>
        </div>

        {/* Spacer Column */}
        <div className="col-md-1"></div>

        {/* Image Section */}
        <div className="col-md-6 text-center order-1 order-md-2">
          <img
            src={imageUrl}
            alt={productName}
            className="img-fluid rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            style={{
              maxWidth: "90%",
              borderRadius: "12px",
              transition: "all 0.3s ease-in-out"
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
      </div>
    </div>
  );
}
