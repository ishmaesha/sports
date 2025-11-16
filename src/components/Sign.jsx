import React from 'react';
const Sign =()=>{
    return (
        <div className='sign'>
            <p className='community'>BECOME PART OF THE TOP SPORT COMMUNITY</p>
            <p className='discount'>Sign up to get 30% discount on products before it's gone. </p>
            <input className='email' type="text" placeholder='Enter your email' />
            <button className='disbtn'>Get 30%</button>
            <div className='conditions'>I have read the Terms and Conditions (to the extent of the Newsletter provisions) and Privacy Policy and accept their provisions.</div>
        </div>
    )
}
export default Sign;