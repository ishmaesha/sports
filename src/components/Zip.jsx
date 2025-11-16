import React from "react"
import { Link } from "react-router-dom";
const Zip=()=>{
    return(
         <div className="product-listing">
      <div className="product-image-container">
        <img src="https://i.pinimg.com/736x/2c/ee/5a/2cee5a90219023ccbcbc6fc447acc1dd.jpg"/>
      </div>
      <div className="product-details">
        <div className="product-info">
          <h2>Zip Hoodie</h2>
          <p>Sports Product/Equipment</p>
          <p className="price">Rs 4,000/-</p>
          <p className="description">
               Made up of cotton, making it ideal for intense workouts.
          </p>
          <p>(Standard Weight)</p>
        </div>
        <div className="product-specifications">
          <h3>View dimensions</h3>
          <p>Not Specific</p>
          <h3>  Material</h3>
          <p>Cotton</p>
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
export default Zip;