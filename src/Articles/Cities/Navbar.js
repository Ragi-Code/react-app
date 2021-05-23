import React, { Component } from "react";
import {Link} from 'react-router-dom'
import './Navbar.css'

function NavbarPage(){
  return(
        <ul>
          <li><Link to="/" class="active">Home</Link></li>
          <li><Link to="/Countries" >Countries</Link></li>
          <li><Link to="/Cities" >Cities</Link></li>
          <li><Link class="activea" to="/login" >Login</Link></li>
        </ul>
  );
}
  
export default NavbarPage;