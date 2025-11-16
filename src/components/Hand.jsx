import React from "react";
import { Link } from "react-router-dom";
const Hand=()=>{
    return(
         <div className="product-listing">
      <div className="product-image-container">
        <img src="https://th.bing.com/th/id/OIP.o09a8V4d6ODgD9HD7tHPGgHaHa?pid=ImgDet&w=182&h=182&c=7"/>
      </div>
      <div className="product-details">
        <div className="product-info">
          <h2>Sports Gloves</h2>
          <p>Sports Product/Equipment</p>
          <p className="price">Rs 4,000/-</p>
          <p className="description">
               Made up of Leather. The flexibility and toughness of leather make it as strong as it is soft.
          </p>
          <p>(Standard Weight)</p>
        </div>
        <div className="product-specifications">
          <h3>View dimensions</h3>
          <p>Not Specific</p>
          <h3>  Material</h3>
          <p>Leather</p>
          <h3>Colour</h3>
          <p>Red and Black</p>
          <p className="availability">Available in this region.</p>
          <p className="shipping-info">Made in Pakistan • Ships in: 10-11 weeks.</p>
          <Link to="/payment">
          <button className="view-payment-info">View payment information</button>
          </Link>
        </div>
      </div>
    </div>
    )
}
export default Hand;