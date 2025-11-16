import React from "react";
import { Link } from "react-router-dom";
const Tenis=()=>{
    return(
         <div className="product-listing">
      <div className="product-image-container">
        <img src="https://i.pinimg.com/736x/6b/d9/26/6bd926253c3018b24dbb77012035ca36.jpg"/>
      </div>
      <div className="product-details">
        <div className="product-info">
          <h2>Tennis</h2>
          <p>Sports Product/Equipment</p>
          <p className="price">Rs 4,000/-</p>
          <p className="description">
               Made up of Stainless Steel, making it ideal for intense workouts.
          </p>
          <p>(Standard Weight)</p>
        </div>
        <div className="product-specifications">
          <h3>View dimensions</h3>
          <p>27.9 to 30cm long</p>
          <h3>  Material</h3>
          <p>Stainless Steel</p>
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
    )
}
export default Tenis;