import React from 'react';
import { Link } from 'react-router-dom';

const Ball= () => {
  return (
    <div className="product-listing">
      <div className="product-image-container">
        <img src="https://i.pinimg.com/736x/da/d5/00/dad500934e9503cd3c47dd3b3b5991f6.jpg"/>
      </div>
      <div className="product-details">
        <div className="product-info">
          <h2>Foot Ball</h2>
          <p>Sports Product/Equipment</p>
          <p className="price">Rs 3,000/-</p>
          <p className="description">
                Spherical and made up of suitable material.
                Weight about 410g to 450g.
          </p>
          <p>(Standard Weight)</p>
        </div>
        <div className="product-specifications">
          <h3>View dimensions</h3>
          <p>27.9 to 28.6cm long</p>
          <h3>Fabric</h3>
          <p>Ployester</p>
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

export default Ball;