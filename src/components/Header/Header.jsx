import React from 'react'
import logo from "../img/clarusway-logo-black.png"
import "./Header.css"

const Header = () => {
  return (
    <div className='header_container'>
        <img className='logocl' src={logo} alt="clarusway" />
    </div>
  )
}

export default Header;