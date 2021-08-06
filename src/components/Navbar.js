import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

function Navbar() {
  const data = useStaticQuery(graphql`
    query MetaDataUsingStatic {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `);
  console.log(data);

  return (
    <nav>
      <h1>Web Warrior</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar;