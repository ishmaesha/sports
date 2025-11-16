import React from "react";
import {Link} from 'react-router-dom';

const Banner =() => {
 return(
 <div className="banner">  
    <div className="background-section">
      <h2>
        TOP SPORT HERE<br />
        with 1,000+ reviews
      </h2>
      <Link to="/mostloved" className="btn">
        SHOP ALL CUSTOMERS’ MOST-LOVED
      </Link>
      <Link to="/watch" className="btn">
        WATCH MOST-LOVED MATCHES FOR FREE
      </Link>
      <div>
      <Link to="/explore">
            <button  className = "explore" type='button'>Explore More</button>
      </Link>
      </div>
    </div>
 </div>
 )
}
export default Banner;