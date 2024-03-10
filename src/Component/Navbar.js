import React, { useState } from "react";
// import { Link,NavLink} from "react-router-dom";

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
              <a className="nav-link text-light" href = "/about">about</a>
            </li>

            <li className="nav-item">
              <a className="nav-link mx-3 text-light" type="submit" href="/Signin ">
                Sign in
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link mx-3 text-light" type="submit" href = "/Signup">
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" type = "submit" href = "/ Contactus"> Contact us</a>
            </li>
            </ul>
           <form className="d-flex" role="search" >
            <input className="form-control me-2 text-light"  type="search" placeholder="search" area-label="Search" />
            <button className="btn btn-outline-success text-light " type = "submit">Search</button>
           </form>
           {/* <NavLink to="/about" className={({isActive})=> `${isActive ? 'text-orange-700' : 'text-light'}`
          }>
            about
           </NavLink>
           <NavLink to="/Signup" className={({isActive})=> `${isActive ? 'text-orange-700' : 'text-light'}`
          }>
            Signup
           </NavLink>
           <NavLink to="/Signin" className={({isActive})=> `${isActive ? 'text-orange-700' : 'text-light'}`
          }>
            Signin
           </NavLink> */}
        

        </div>
      </div>
    </nav>
  );
}
