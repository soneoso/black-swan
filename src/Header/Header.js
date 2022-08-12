import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import MenuIcon from '../Assets/menu.svg'

function Header() {
  return (
    <div>
    <header>
        <div id="logo"></div>
        <div className="toggle-menu">
            <img src={MenuIcon} alt="" />
        </div>
        <ul className="menu-items">
            <li>
                <Link to="/" className='li'>Home</Link>
            </li>
            <li>
                <Link to="/about" className='li'>About</Link>
            </li>
            <li>
                <Link to="/projects" className='li'>Reserve A Table</Link>
            </li>
            <li>
                <Link to="/contact" className='li'>Contact</Link>
            </li>
            <li>
                <Link to="" className='li'>Team</Link>
            </li>
            <li>
                <Link to="" className='li'>Book A Stay</Link>
            </li>
            <li>
                <Link to="" className='li'>Menu</Link>
            </li>
        </ul>
    </header>
    </div>
  )
}

export default Header