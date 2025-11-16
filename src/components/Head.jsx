import React from "react";
import { Link } from "react-router-dom";
const Head=()=>{
    return(
         <div className="product-listing">
      <div className="product-image-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAyuvKXhTcyyRPNeLq_ar_4ar-r95zOmPPtA&s"/>
      </div>
      <div className="product-details">
        <div className="product-info">
          <h2>Bicycle Helmet</h2>
          <p>Sports Product/Equipment</p>
          <p className="price">Rs 4,000/-</p>
          <p className="description">
               Made up of plastic and also use form inside it, making it ideal for intense workouts.
          </p>
          <p>(Standard Weight)</p>
        </div>
        <div className="product-specifications">
          <h3>View dimensions</h3>
          <p>Not Specific</p>
          <h3>  Material</h3>
          <p>Plastic and Form</p>
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
    )
}
export default Head;