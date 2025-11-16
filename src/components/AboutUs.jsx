import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className='length'><h1>About Us</h1></div>
      <div className="about-us-content">
        <div className="about-us-image">
          <img src="https://i.pinimg.com/736x/2d/4c/9c/2d4c9c5773e4cb91edbdf4fbec8520a6.jpg"/>
        </div>
        <div className="about-us-text">
          <h1>Our Story</h1>
          <p>"TOP SPORT is an amazing plat-form. At "TOP SPORT" our story began with a passion for innovation.
             Founded in 2002 we have grown from a small team to a global community of dedicated professionals.
             Our journey has been shaped by our values of creativity, integrity, and customer-centricity.
             Today, we are proud to be a leading TOP SPORT Company to make a positive impact on the world."</p>
          <h1 className='height'>Our Mission</h1>
          <p className='heights'>"Our mission is to empower customers by delivering innovative products that exceed expectations. 
            We're dedicated to building long-term relationships, driving growth, and making a meaningful difference 
            in the lives of those we serve. With a focus on key values  we strive to be a trusted partner and
             a leader in our industry."
          </p>
        </div>
      </div>
      <div className="team-members">
        <h1>Meet Our Team</h1>
        <div className="team-member">
          <img src="https://i.pinimg.com/736x/7e/83/0e/7e830e9c49dee63d546ba2b376523d30.jpg"/>
          <h3>John </h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src="https://i.pinimg.com/736x/80/cc/0b/80cc0b4845a56e182106a8d0fb8049e7.jpg"/>
          <h3>Anna</h3>
          <p>Marketing Manager</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;