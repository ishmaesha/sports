import React from 'react';
import { Link } from 'react-router-dom';

const Sportscategories = () => {
  return (
    <div className="categories-container">
      <h1 className="logo">🛒 Top Sports</h1>
      <p className="tagline">SHOP SMART. LIVE BETTER.</p>

      <div className="grid-container">
        <Link to="/tennis" className="item">
          <div className="icon">🏸</div>
          <p>Tennis</p>
        </Link>
        <Link to="/sportscaps" className="item">
          <div className="icon">🧢</div>
          <p>Sports Cap</p>
        </Link>
        <Link to="/hockey" className="item">
          <div className="icon">🏑</div>
          <p>Hockey</p>
        </Link>
        <Link to="/cricketkit" className="item">
          <div className="icon">🎿</div>
          <p>Cricket Kit</p>
        </Link>
        <Link to="/football" className="item">
          <div className="icon">⚽</div>
          <p>Football</p>
        </Link>
        <Link to="/sportsshoes" className="item">
          <div className="icon">👟</div>
          <p>Sports Shoes</p>
        </Link>
        <Link to="/cricketball" className="item">
          <div className="icon">⚾</div>
          <p>Ball</p>
        </Link>
        <Link to="/cricketbat" className="item">
          <div className="icon">🏏</div>
          <p>Bat</p>
        </Link>
      </div>

      <div className="offer">
        <h2>30 % OFF</h2>
        <p>LIMITED TIME ONLY!</p>
      </div>
<Link to="/payment">
      <button className="shop-button">SHOP NOW</button>

    </Link>
    </div>
  );
};

export default Sportscategories;