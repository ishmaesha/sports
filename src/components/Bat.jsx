import React from 'react';
import { Link } from 'react-router-dom';

const Bat= () => {
  return (
    <div className="product-listing">
      <div className="product-image-container">
        <img src="https://i.pinimg.com/736x/fa/1c/bc/fa1cbc72ad6838b8a8a4b5e5b3f35bb0.jpg"/>
      </div>
      <div className="product-details">
        <div className="product-info">
          <h2>Cricket Bat</h2>
          <p>Sports Product/Equipment</p>
          <p className="price">Rs 4,000/-</p>
          <p className="description">
               The blade of a cricket bat is a wooden block that is generally flat on the striking face and with a ridge on the reverse.
          </p>
          <p>(Standard Weight)</p>
        </div>
        <div className="product-specifications">
          <h3>View dimensions</h3>
          <p>27.9 to 28.6m long</p>
          <h3>Material</h3>
          <p>Wood</p>
          <h3>Colour</h3>
          <p>Green and Black</p>
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

export default Bat;