import React from 'react';
import {Link,NavLink} from "react-router-dom";
const Navbar=()=>{
	return(
		<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
 		<div className="container">
 		 <NavLink class="navbar-brand" to="/">My Entry</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
       <li className="nav-item active">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
   <Link to="/users/add" className="btn btn-outline-light ml-4">Add User</Link>
 		</div>
</nav>
);
}
export default Navbar;