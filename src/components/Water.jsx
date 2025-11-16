import React from "react";
import { Link } from "react-router-dom";

const Water = () => {
  return (
    <div className="product-listing">
      <div className="product-image-container">
        <img src="https://i.pinimg.com/736x/b9/53/94/b95394463683907619b8f755de3a673a.jpg"/>                                                                     
      </div>
      <div className="product-details">
        <div className="product-info">
          <h2>Water Bottle</h2>
          <p>Sports Product/Equipment</p>
          <p className="price">Rs 3,000/-</p>
          <p className="description"> Made up of bottle made of plastic, stainless steel, or glass. </p>
          <p>(Standard Weight)</p>
        </div>
        <div className="product-specifications">
          <h3>View dimensions</h3>
          <p>Not Specific</p>
          <h3> Material</h3>
          <p>Plastic, Stainless Steel and Glass</p>
          <h3>Colour</h3>
          <p>Green and Black</p>
          <p className="availability">Available in this region.</p>
          <p className="shipping-info">Made in Pakistan • Ships in: 10-11 weeks.</p>
          <div>
          <Link to="/payment">
            <button className="view-payment-info">View payment information</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Water;