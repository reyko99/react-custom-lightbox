import React from "react";

export const CardImage = ({ image = "", altText = "", children }) => {
  return (
    <div className="img-section">
      <div className="img-container">
        <img src={image} alt={altText} />
      </div>
      {children}
    </div>
  );
};

CardImage.defaultProps = {
  image:
    "https://res.cloudinary.com/dakp804eh/image/upload/c_fit,w_838/v1589478962/widgets/cars/photo-of-supra-parked-in-front-of-building-3874337.jpg",
  altText: "Cars concesionary"
};
