import React from 'react'
import { Link, navigate } from 'gatsby'

function Navbar() {
  const activeStyle = { fontWeight: 700 };

  const navigateToHome = () => {
    navigate("/");
  }
  return (
    <nav>
      <h1>
        <span
          role="link"
          tabIndex="0"
          style={{ cursor: "pointer" }}
          onClick={navigateToHome}
          onKeyDown={navigateToHome}>Web Warrior
        </span>
      </h1>
      <div className="links">
        <Link activeStyle={activeStyle} to="/">Home</Link>
        <Link activeStyle={activeStyle} to="/about">About</Link>
        <Link activeStyle={activeStyle} to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar;