import React from 'react';
import { Link } from 'react-router-dom';

const Hock= () => {
  return (
    <div className="product-listing">
      <div className="product-image-container">
        <img src="https://i.pinimg.com/736x/29/0f/c7/290fc767a6f65150cdf8e7c0e2ceb146.jpg"/>
      </div>
      <div className="product-details">
        <div className="product-info">
          <h2>Hockey</h2>
          <p>Sports Product/Equipment</p>
          <p className="price">Rs 2,000/-</p>
          <p className="description">
         Made up of Wood. Long and " L-shaped " with a blade positioned at 135 degrees approx.
          </p>
          <p>(Standard Weight)</p>
        </div>
        <div className="product-specifications">
          <h3>View dimensions</h3>
          <p>27.9 to 28.6cm long</p>
          <h3>Fabric</h3>
          <p>Wood</p>
          <h3>Colour</h3>
          <p>White and Black</p>
          <p className="availability">Available in this region.</p>
          <p className="shipping-info">Made in Pakistan • Ships in: 10-11 weeks.</p>
          <Link to="/payment">
          <button className="view-payment-info">View payment information</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hock;