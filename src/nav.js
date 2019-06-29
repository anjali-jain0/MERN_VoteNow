import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {

  render() {
    const id = this.props.user._id;
    return (

  <nav>
    <div className="nav-wrapper" style={{backgroundColor:'#009688'}}>
      <Link to="/" className="brand-logo">MERN Vote</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/topusers">TOPUSER</Link></li>
        <li><Link to={"/profile/" + id}>PROFILE</Link></li>
        <li><Link to={"/editprofile/" + id}>EDITPROFILE</Link></li>
        <li><Link to="/logout">SIGNUP</Link></li>
        <li><Link to="/login">SIGNIN</Link></li>
      </ul>
    </div>
  </nav>
      
    );
  }
}

export default Nav;