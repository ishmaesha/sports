import React from 'react';
import {Link} from 'react-router-dom';
const Cards =()=>{
    return(
        <div className='cards'> 
            <Link to="/plainsweatsuit" className='card'>
                <img className='product' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxeINLRELZ1VT_xQOrRIZ9QOZxbv8YvNnQpg&s"/>
                <h3 className='detail'> Plain Sweat Suit</h3>
                <button className='shop'>Shop Now</button>
            </Link>
               <Link to="/tracksuit" className='card'>
                <img className='product'   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfio1rWjpIeX-c0nz9jdi_jIqCUFCZEjECA&s"/>
                <h3 className='detail'>Track Suit</h3>
                <button className='shop'>Shop Now</button>
            </Link>
               <Link to="/tennis" className='card'>
                <img className='product1' src="https://i.pinimg.com/736x/6b/d9/26/6bd926253c3018b24dbb77012035ca36.jpg"/>
                <h3 className='detail'>Tennis</h3>
                <button className='shop'>Shop Now</button>
            </Link>
               <Link to="/football" className='card'>
                <img className='product1' src="https://i.pinimg.com/736x/da/d5/00/dad500934e9503cd3c47dd3b3b5991f6.jpg"/>
                <h3 className='detail'>Foot Ball</h3>
                <button className='shop'>Shop Now</button>
            </Link>
               <Link to="/sportsshoes" className='card'>
                <img className='product1'  src="https://i.pinimg.com/736x/c8/91/bf/c891bf09dd4d49c593347bdebfe299a3.jpg"/>
                <h3 className='detail'> Sports Shoes</h3>
                <button className='shop'>Shop Now</button>
            </Link>
                <Link to="/sportscaps" className='card'>
                <img className='product1'  src="https://i.pinimg.com/736x/d4/98/06/d498066095f4e24018c6860fddfbc2cd.jpg"/>
                <h3 className='detail'> Sports Caps</h3>
                <button className='shop'>Shop Now</button>
            </Link>
        </div>
    )
}
export default Cards;