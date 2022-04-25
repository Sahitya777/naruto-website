import React from 'react'
import './header.scss' 
import {logo} from "../../assets/images"
function Header() {
  return (
    <div className='header'>
        <div className='header_inner container'>
          <div className='header_logo'>
            <img src={logo} alt=""/>
          </div>
          <ul className='header_nav'>
            <li><a href='#'>overview</a></li>
            <li><a href='#'>news</a></li>
            <li><a href='#'>champions</a></li>
            <li><a href='#'>support</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Header;