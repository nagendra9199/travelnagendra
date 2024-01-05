import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';

import Mainpage from '../../Mainpage';

import {FaAngleDown} from 'react-icons/fa';


import logofinal from '../../assets/Images/logofinal.jpg';

class Header extends Component {
  state = {
    isHolidayDropdownOpen: false,
    isAdventureDropdownOpen: false,
  };

  handleHolidayDropdownToggle = () => {
    this.setState((prevState) => ({
      isHolidayDropdownOpen: !prevState.isHolidayDropdownOpen,
    }));
  };

  handleAdventureDropdownToggle = () => {
    this.setState((prevState) => ({
      isAdventureDropdownOpen: !prevState.isAdventureDropdownOpen,
    }));
  };

  render() {
    return (
      <div>
        <div className='header-main-container'>
          <div className='logo-container'>
            <img src={logofinal} alt=''/>
          </div>
          <div className='navbar-container'>
            <ul className='list-items'>
              <a href=''>
                <li><Link to={'/'} className='advanture-link'>Home</Link></li>
              </a>
              <a href=''>
                <li><Link to={`/Aboutus/`} className='advanture-link'>About Us</Link></li>
              </a>

              <li
                onMouseEnter={this.handleHolidayDropdownToggle}
                onMouseLeave={this.handleHolidayDropdownToggle}
              >
                Holiday Packages{' '}
                <FaAngleDown className='dropdown-span'/>

                {this.state.isHolidayDropdownOpen && (
                  <ul className='dropdown-content'>
                    <a href=''>
                      <li>Option 1</li>
                    </a>
                    <a href=''>
                      <li>Option 2</li>
                    </a>
                  </ul>
                )}
              </li>

              <a href=''><li><Link to={`/Gallery/`} className='advanture-link'>Gallery</Link></li></a>
              <li><Link to={`/Awards/`} className='advanture-link'>Awards</Link></li>

              <li
                onMouseEnter={this.handleAdventureDropdownToggle}
                onMouseLeave={this.handleAdventureDropdownToggle}
              >
                <Link to={`/Advanture/`} className='advanture-link'>Adventures{' '}
                <FaAngleDown  className='dropdown-span'/></Link>
                

                {this.state.isAdventureDropdownOpen && (
                  <ul className='dropdown-content'>
                    <a href=''>
                      <li>ROCK CLIMBING</li>
                    </a>
                    <a href=''>
                      <li>RAPPELLING</li>
                    </a>
                    <a href=''>
                      <li>MOUNTAINEERING</li>
                    </a>
                    <a href=''>
                      <li>TREKKING</li>
                    </a>
                    <a href=''>
                      <li>SHOOTING</li>
                    </a>

                    <a href=''>
                      <li>ARCHERY</li>
                    </a>
                    <a href=''>
                      <li>ZIPLINE</li>
                    </a>
                    <a href=''>
                      <li>CAMPING</li>
                    </a>
                    <a href=''>
                      <li>NATURE AVERENESS</li>
                    </a>
                  </ul>
                )}
              </li>

              <a href=''>
                <li><Link to={`/Contactus/`} className='advanture-link'>Contact Us</Link></li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
