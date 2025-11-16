import React from "react";
import { Link } from "react-router-dom";
const Sweatsuit =()=>{
    return(
       <div className="product-listing">
      <div className="product-image-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxeINLRELZ1VT_xQOrRIZ9QOZxbv8YvNnQpg&s"/>
      </div>
      <div className="product-details">
        <div className="product-info">
          <h2>Plain Sweat Suit</h2>
          <p>Sports Product/Equipment</p>
          <p className="price">Rs 6,000/-</p>
          <p className="description">
                Made of synthetic fibers like polyester and spandex which are strong and resilient. These materials hold up to stretching, bending, and extended use without wear.
          </p>
          <p>(Standard Weight)</p>
        </div>
        <div className="product-specifications">
          <h3>View dimensions</h3>
          <p>27.9 to 30m long</p>
          <h3>Fabric</h3>
          <p>Ployester and spandex</p>
          <h3>Colour</h3>
          <p>Black and Blue</p>
          <p className="availability">Available in this region.</p>
          <p className="shipping-info">Made in Pakistan • Ships in: 10-11 weeks.</p>
          <Link to ="/payment">
          <button className="view-payment-info">View payment information</button>
          </Link>
        </div>
      </div>
    </div>
    )
}
export default Sweatsuit;