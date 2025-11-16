import React from "react";
import {Link} from 'react-router-dom';

const Navbar =() => {
 return(
 <div className="navbar">
  <div>
    <img className="image" src="https://i.pinimg.com/736x/a0/df/ef/a0dfefda1a9bf940233179e84a33b023.jpg" />
  </div>
  
   <ul className="nav-links">
     
     <li><Link to="/">🏠Home</Link></li> 
         <li><Link to="/about">👤About</Link></li> 
       <li> <Link to="/contact">📞Contact</Link></li>
         <li><Link to="/shop-here">🛒Shop Here</Link></li>

   </ul>
 </div>
 )
}
export default Navbar;