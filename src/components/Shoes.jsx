import React from 'react';
import { Link } from 'react-router-dom';


const Shoes= () => {
  return (
    <div className="product-listing">
      <div className="product-image-container">
        <img src="https://i.pinimg.com/736x/c8/91/bf/c891bf09dd4d49c593347bdebfe299a3.jpg"/>
      </div>
      <div className="product-details">
        <div className="product-info">
          <h2>Sports Shoes</h2>
          <p>Sports Product/Equipment</p>
          <p className="price">Rs 15,000/-</p>
          <p className="description">
            Made up of suitable material.
            Weight about 250g to 320g.
          </p>
          <p>(Standard Weight)</p>
        </div>
        <div className="product-specifications">
          <h3>View dimensions</h3>
          <p>23.5 to 26.67cm long</p>
          <h3>Fabric</h3>
          <p>Leather</p>
          <h3>Colour</h3>
          <p>White, Black and Green</p>
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

export default Shoes;