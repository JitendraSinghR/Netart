import React from 'react'
import logo from "../../assets/logo.png"
import "./Header.css" 

function Header() {
  return (
    <div id='coontainer'>
      <img id='head' src={logo} alt="Logo" />
    </div>
  )
}

export default Header