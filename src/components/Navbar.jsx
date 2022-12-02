import React from 'react';
import { Link } from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Navbar() {
  return (
        <div className="nav-bar">
        <div className="logo"><h1>pinky</h1></div>
        <div className="nav-list">
          <div className="products"><Link to="/"><h4>Ürünlerimiz</h4></Link></div>
          <div className="aboutus"><Link to="/aboutus"><h4>Hakkımızda</h4></Link></div>


        </div>

      </div>
  

  )
}

export default Navbar
