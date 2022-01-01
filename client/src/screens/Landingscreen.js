import React from 'react'
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration: 2000
});

function Landingscreen() {
    return (
        <div className="row landing justify-content-center">
            <div className="col-md-9 my-auto text-center"  style={{borderRight: '8px solid white'}}>
                <h2 data-aos='zoom-in' style={{color: 'white', fontSize:'130px', fontWeight:'bold'}}>
                    Shey Rooms
                </h2>
                <h1 data-aos='zoom-out' style={{color: 'white'}}>
                    "There is onlyb one boss. The Guest.
                </h1>
                <Link to='/home'>
                <button className="btn landingbtn" style={{color: 'black'}}>Get Started</button>
                </Link>
            </div>         
        </div>
    )
}

export default Landingscreen
