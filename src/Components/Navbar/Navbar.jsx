import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        {/** Navbar */}
        <nav className='navbar navbar-expand-md navigation navbar-dark'>
            <div className="container">

                {/** When screen is smaller than size large, navbar collapses into hamburger menu */}
                <button className="navbar-toggler" type='button' data-bs-toggle='collapse' data-bs-target='#navmenu'>
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/** Navigation menu options */}
                <div className="collapse navbar-collapse" id='navmenu'>
                    <ul className='navbar-nav ms-auto'>
                        <li className="nav-item nav-item-style">
                            <a href="#" className="nav-link"><span className='navlink-items'>Directions</span></a>
                        </li>
                        <li className="nav-item nav-item-style">
                            <a href="#" className="nav-link"><span className='navlink-items'>Hours <span className='navlink-items-color'>Open Now</span></span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link"><span className='navlink-items'>Contact Us</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar