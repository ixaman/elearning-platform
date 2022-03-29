import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
    <div className="banner-container ">
        <div className="">
            <div className="row d-flex banner align-items-center justify-content-center">
            <div className="col-md">
                <h1 className="title">
                Enroll Now
                </h1>
                <h3 className="title">We have worlds best instructor.</h3>
                <h4 className="text-white text-center mt-3">
                We make learning fun !
                </h4><br />
                <Link to="/courses"><button className="mt-3 about-btn">Browse Courses &#8594;</button></Link>
            </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;