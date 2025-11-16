import React from 'react';
import { Link } from 'react-router-dom';

const Most =()=>{
    return(
       <div>
          <div className='front-img'> </div>
          <div className='all'>
            <Link to="/sportsshoes"className='first second'>
                <img className='im' src="https://th.bing.com/th/id/OIP.JthAP5rqLetF0QWMTRYeUQHaDl?w=295&h=169&c=7&r=0&o=7&pid=1.7&rm=3" alt="" />
                <p className='name'>Shoes</p>
                <p className='prize'>Rs 6,000/-</p>
                 <p className='stars'>⭐⭐⭐⭐⭐</p>
                 <button className='button'>Shop Now</button>
            </Link>
            <Link to="/football" className='first'>
                   <img  className='im' src="https://th.bing.com/th?q=Assorted+Sports+Balls&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247" alt="" />
                <p className='name'>Footballs</p>
                 <p className='prize'>Rs 3,000/-</p>
                 <p className='stars'>⭐⭐⭐⭐⭐</p>
               <button className='button'>Shop Now</button>
            </Link>
            <Link to="/ziphoodie" className='first second'>
                   <img  className='im' src="https://i.pinimg.com/736x/2c/ee/5a/2cee5a90219023ccbcbc6fc447acc1dd.jpg"  />
                <p className='name'>Zip Hoodie</p> 
                 <p className='prize'>Rs 8,000/-</p>
                 <p className='stars'>⭐⭐⭐⭐⭐</p>
                <button className='button'>Shop Now</button>
            </Link>
            <Link to="/cricketkit" className='first'>
                   <img  className='im' src="https://i.pinimg.com/736x/7d/e9/70/7de9701f2760bdc6fbc8915e28016b8c.jpg" alt="" />
                <p className='name'>Cricket Kit</p>
                 <p className='prize'>Rs 10,000/- </p>
                 <p className='stars'>⭐⭐⭐⭐⭐</p>
                  <button className='button'>Shop Now</button>
            </Link>
         </div>
        </div>
    )
}
export default Most;