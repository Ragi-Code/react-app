// src/Title.js
import React from 'react';
import './Title.css';
import Header from './Header'
import {Link} from 'react-router-dom'


const Title = props =>{
  return (
    <div className="Title">
      <Header />
      <h1>{props.title}</h1>
            <div className="Title-Subtitle"> {props.sustitle}</div>
      <div className="Links">
         <Link to="/" >Home</Link>

      </div>
    </div>
    
  )
}

export default Title;