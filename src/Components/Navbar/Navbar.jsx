import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Navbar.css'
import logo from '../../Assets/images/logo-with-silver-effect.png'

const Navbar = () => {
  return (
    <div>
        {/** Navbar */}
        <nav className='navbar navbar-expand-md navbar-dark navigation'>
            <div className="container">

                {/** When screen is smaller than size large, navbar collapses into hamburger menu */}
                <button className="navbar-toggler navbar-toggle-position" type='button' data-bs-toggle='collapse' data-bs-target='#navmenu'>
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/** Navigation menu options */}
                <div className="collapse navbar-collapse" id='navmenu'>
                    {/** Header Logo Option 1 */}
                    <Link to='/'>
                        <a class="navbar-brand" href="/"><img src={logo} alt="" className="header-logo" /></a>
                    </Link>
                    <ul className='navbar-nav ms-auto'>
                        <li className="nav-item nav-item-style">
                            <Link to='/directions'>
                                <a href="/directions" className="nav-link"><span className='navlink-items'>Directions</span></a>
                            </Link>
                        </li>
                        <li className="nav-item nav-item-style">
                            <Link to='/open-hours'>
                                <a href="/open-hours" className="nav-link"><span className='navlink-items'>Hours <span className='navlink-items-color'>Open Now</span></span></a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact-us'>
                                <a href="/contact-us" className="nav-link"><span className='navlink-items'>Contact Us</span></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar