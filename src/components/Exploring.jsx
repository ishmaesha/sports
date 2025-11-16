import React from 'react';
import { Link } from 'react-router-dom';
const Exploring =()=>{
    return(
        <div className='explores'> 
            <Link to="/helmet" className='exploring'>
                <img className='product' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAyuvKXhTcyyRPNeLq_ar_4ar-r95zOmPPtA&s"/>
                <h3 className='detail'> Bicycle Helmet</h3>
                <button className='shop'>Shop Now</button>
            </Link>
               <Link to="/cricketbat" className='exploring'>
                <img className='product1'   src="https://i.pinimg.com/736x/fa/1c/bc/fa1cbc72ad6838b8a8a4b5e5b3f35bb0.jpg"  />
                <h3 className='detail'>Cricket Bat</h3>
                <button className='shop'>Shop Now</button>
            </Link>
               <Link to="/cricketball" className='exploring'>
                <img className='product1' src="https://i.pinimg.com/736x/e2/2f/9c/e22f9c20556bca1c205422c071d5552a.jpg" />
                <h3 className='detail'>Cricket Ball</h3>
                <button className='shop'>Shop Now</button>
            </Link>
               <Link to="/basketball" className='exploring'>
                <img className='product1' src="https://i.pinimg.com/736x/73/b5/3f/73b53f83a8f52973d49a9ab856512fd6.jpg" />
                <h3 className='detail'>Basket Ball</h3>
                <button className='shop'>Shop Now</button>
            </Link>
               <Link to="/waterbottle" className='exploring'>
                <img className='product1'  src="https://i.pinimg.com/736x/b9/53/94/b95394463683907619b8f755de3a673a.jpg" />
                <h3 className='detail'> Water Bottle</h3>
                <button className='shop'>Shop Now</button>
            </Link>
                <Link to="/hockey" className='exploring'>
                <img className='product1'  src="https://i.pinimg.com/736x/bf/69/bc/bf69bcd3d761fa7532bc7361c4dd87d7.jpg" />
                <h3 className='detail'> Hockey</h3>
                <button className='shop'>Shop Now</button>
            </Link>
        </div>
    )
}
export default Exploring;