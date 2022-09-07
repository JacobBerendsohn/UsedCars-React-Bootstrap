import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
  return (
    <div>
        {/** Navbar */}
        <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-3'>
            <div className="container">
                {/** Navbar Brand / Logo */}
                <a href='#' className='navbar-brand'>Value Inc</a>

                {/** When screen is smaller than size large, navbar collapses into hamburger menu */}
                <button className="navbar-toggler" type='button' data-bs-toggle='collapse' data-bs-target='#navmenu'>
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/** Navigation menu options */}
                <div className="collapse navbar-collapse" id='navmenu'>
                    <ul className='navbar-nav ms-auto'>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Directions</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Hours</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar