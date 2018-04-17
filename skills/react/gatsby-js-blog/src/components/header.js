import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '0',
    }}
  >
    <div
      className="green darken-1"
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        textAlign: 'center'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
