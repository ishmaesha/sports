import React from "react";
import { Link } from "react-router-dom";
const Track =()=>{
    return(
        <div className="product-listing">
      <div className="product-image-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfio1rWjpIeX-c0nz9jdi_jIqCUFCZEjECA&s"/>
      </div>
      <div className="product-details">
        <div className="product-info">
          <h2>Track Suit</h2>
          <p>Sports Product/Equipment</p>
          <p className="price">Rs 8,000/-</p>
          <p className="description">
               Made of polyester and cotton. Polyester is renowned for its durability and moisture-wicking properties, making it ideal for intense workouts.
          </p>
          <p>(Standard Weight)</p>
        </div>
        <div className="product-specifications">
          <h3>View dimensions</h3>
          <p>27.9 to 30m long</p>
          <h3>Fabric</h3>
          <p>Ployester and Cotton</p>
          <h3>Colour</h3>
          <p>White , Red and Black</p>
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
export default Track;