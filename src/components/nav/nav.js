import React from 'react';
import './nav.css';


class Nav extends React.Component{
    render() {
        return (
          <div className='Nav'>
          <div className='logo_container'>
            <img src='./src/assets/images/bearface.png' />
          </div>
            <ul className="navbar">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        );
    }
}

export default Nav;
