import React from 'react';
import Link from 'gatsby-link';

const Menu = () => (
  <div className="main-nav grey darken-4">
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        padding: '5px 0',
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </div>
)

export default Menu;