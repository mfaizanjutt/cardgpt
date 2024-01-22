import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
// import Main from '../Main/Main'
// import Data from '../../Data/Data'
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Faizan</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className="nav-link active hover" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item hover">
          <a className="nav-link hover" href="#">Features</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link hover" href="#">Pricing</a>
        </li>
      </ul>
      <span className="navbar-text m-lg-2 hover ">
        Navbar </span>
      <span className="navbar-text hover">
        Navbar </span>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
