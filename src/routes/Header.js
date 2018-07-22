import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <ul className="nav navbar-nav">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/customers">Customers</NavLink></li>
            <li><NavLink to="/consultants">Consultants</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;