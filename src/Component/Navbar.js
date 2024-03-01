import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [style,SetStyle] = useState({
    color:'white',
    backgroundColor: 'gray',
  })
    
  
  return (
    <nav className="navbar navbar-expand-lg  " style={style}>
      <div className="container-fluid">
        <a className="navbar-brand mx-3 text-light" href="/">
          Car Park
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" type = "submit">
              <Link className="nav-link text-light" to = "/about">about</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link mx-3 text-light" type="submit" to="/Sign in ">
                Sign in
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link mx-3 text-light" type="submit" to="/Sign up">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" type = "submit" to = "/ Contact us"> Contact us</Link>
            </li>
            </ul>
           <form className="d-flex" role="search" >
            <input className="form-control me-2 text-light"  type="search" placeholder="search" area-label="Search" />
            <button className="btn btn-outline-success text-light " type = "submit">Search</button>

           </form>
        
        </div>
      </div>
    </nav>
  );
}
