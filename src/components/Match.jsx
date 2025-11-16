import React from 'react';


const Match= () => {
  return (
<div className='container'>
    <div className='box'>
        <h1>Most Loved Matches For Free</h1>
    </div>
      <div className='match-background'></div> 
    <div className="recent">
          <h1 className='vs'> Most Recent Pakistan VS Bangladesh Match T20</h1>
          <div className="links">
            
            <a href="https://youtu.be/xrvcmPfK0hs?feature=shared" 
               target='_blank' 
               rel='noopener noreferrer' className='one'> <img  className='T20x' src="https://i.pinimg.com/736x/8d/5c/a3/8d5ca3294abac729e284e864bc2a16b4.jpg" alt='T20 1st'/></a>
             
            <a href="https://youtu.be/XF8p8_jN60g?feature=shared"
               target='_blank'  
               rel='noopener noreferrer' className='two'> <img className='T20y' src="https://i.pinimg.com/736x/8d/5c/a3/8d5ca3294abac729e284e864bc2a16b4.jpg" alt='T20 2nd' /></a>
            
            <a href="https://youtu.be/L7jvQkBzls4?feature=shared" 
               target='_blank' 
               rel='noopener noreferrer' className='three'><img className='T20z' src="https://i.pinimg.com/736x/8d/5c/a3/8d5ca3294abac729e284e864bc2a16b4.jpg" alt='T20 3rd'/></a>
          </div>
    </div>
</div>
  );
};

export default Match;