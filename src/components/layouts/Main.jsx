import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const Main = props =>
  <div>
    <div className="top-nav">
      <NavLink to="/inbox">[Edit]</NavLink>
      <img alt="logo" src="/img/logo.png" />
      <NavLink to="/inbox">[Donate]</NavLink>
    </div>
    <div className="user-nav">
      <span>Up: <em>...</em></span>
      <span>Down: <em>...</em></span>
      <span>Ratio: <em>...</em></span>
      <NavLink to="/inbox">Inbox</NavLink>
      <NavLink to="/uploads">Uploads</NavLink>
      <NavLink to="/bookmarks">Bookmarks</NavLink>
      <NavLink to="/notifications">Notifications</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/friends">Friends</NavLink>
    </div>
    <div className="site-nav">
      <NavLink className="site-nav-item" to="/inbox">Home</NavLink>
      <NavLink className="site-nav-item" to="/inbox">Torrents</NavLink>
      <NavLink className="site-nav-item" to="/inbox">Requests</NavLink>
      <NavLink className="site-nav-item" to="/inbox">Forums</NavLink>
      <NavLink className="site-nav-item" to="/inbox">Top 10</NavLink>
      <NavLink className="site-nav-item" to="/inbox">Rules</NavLink>
      <NavLink className="site-nav-item" to="/inbox">Help</NavLink>
      <NavLink className="site-nav-item" to="/inbox">Staff</NavLink>
    </div>
    <div className="content">
      {props.children}
    </div>
  </div>;

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
