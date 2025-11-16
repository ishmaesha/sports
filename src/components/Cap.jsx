import React from 'react';
import { Link } from 'react-router-dom';

const Cap= () => {
  return (
    <div className="product-listing">
      <div className="product-image-container">
        <img src="https://i.pinimg.com/736x/d4/98/06/d498066095f4e24018c6860fddfbc2cd.jpg"/>
      </div>
      <div className="product-details">
        <div className="product-info">
          <h2>Sports Caps</h2>
          <p>Sports Product/Equipment</p>
          <p className="price">Rs 2,000/-</p>
          <p className="description">
                Made up of suitable material.
                Weight about 58g.
          </p>
          <p>(Standard Weight)</p>
        </div>
        <div className="product-specifications">
          <h3>View dimensions</h3>
          <p>55 to 60cm long</p>
          <h3>Fabric</h3>
          <p>Ployester</p>
          <h3>Colour</h3>
          <p>White, Black and Green</p>
          <p className="availability">Available in this region.</p>
          <p className="shipping-info">Made in Pakistan • Ships in: 10-11 weeks.</p>
          <Link to ="/payment">
          <button className="view-payment-info">View payment information</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cap;