import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const {user, logout} = useAuth();

    return (
    <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo-text">
              <Link to="/home"><h3>eLearner</h3></Link>
            </div>
          </div>
          <div className="col-md-10 ">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <NavLink to="/home"
                 className="items"
                 
                 >
                  <li>Home</li>
                </NavLink>
                <NavLink to="/courses" 
                className="items"
                
                >
                  <li>Courses</li>
                </NavLink>
                { user.displayName ? <span className="pb-3" style={{color: "black"}}> {user.displayName}</span> :  <span className="pb-3" style={{color: "black"}}> {user.email}</span>}
                <NavLink to="/login" 
                className="items"
                
                >
                  { user.email? <Link to="/home"><button className='btn btn-danger' onClick={logout}>Logout</button></Link>
                  : <li>Login</li>}
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Header;