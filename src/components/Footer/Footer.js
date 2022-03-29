
import React from 'react';
import './Footer.css';
  const Footer = () => {
      return (
          <div>
          <div className="footer-container">
            <div className="container">
              <div className="row">
              <div className="col-md-6">
                  <div className="left-container text-start">
                    <h1>eLearner</h1>
                    <p className="mt-4 ">
                      <small>
                      eLearner is a platform for all your online learning. <br /> We provide best online resources.
                      </small>
                    </p>
    
                    <p className="mt-5">
                      <small>eLearner<br /> ©All rights reserved.</small>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-footer-container">
                    <h3>Sign up for the newsletter</h3>
                    <input
                      className="footer-input"
                      type="text"
                      placeholder="Your Email"
                    /><button className="btn btn-success">Submit</button>
                    <div className="phone d-flex align-items-center justify-content-center mt-4">
                      <div className="foter-phone-icon">
                      </div>
                      <div>
                        <h5>+0 2454 654656</h5>
                      </div>
                    </div>
                    <div className="map d-flex align-items-center justify-content-center">
                      <div className="foter-phone-icon">
                      </div>
                      <div>
                        <p>
                          160 Shewrapara, Mirpur, 1207,
                          <br /> Dhaka, Bangladesh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  };
  
  export default Footer;