import React from 'react';
import { Link } from 'react-router-dom';

const Shopping = () => {
  return (
    <div className="shopping">
             <div><h1 className='title'>Made to fit. Made simple.
                      Customise yours.</h1>
             </div>
      <div className="category-row">
        <Link to="/plainsweatsuit" className="category-button">PLAIN SWEAT SUIT</Link>
        <Link to="/tracksuit" className="category-button">TRACK SUIT</Link>
        <Link to="/helmet" className="category-button">BICYCLE HELMET</Link>
      </div>
      <div className="category-row">
        <Link to="/waterbottle" className="category-button">WATER BOTTLES</Link>
        <Link to="/sportsshoes" className="category-button"> SPOTRS SHOES</Link>
        <Link to="/sportscaps" className="category-button"> SPOTRS CAPS</Link>
      </div>
      <div className="category-row">
        <Link to="/gloves" className="category-button">SPORTS GLOVES</Link>
        <Link to="/saftey" className="category-button">SAFTEY EQUIPMENTS</Link>
      </div>
      <div className="all-products-button">ALL PRODUCTS</div>
    </div>
  );
};

export default Shopping;