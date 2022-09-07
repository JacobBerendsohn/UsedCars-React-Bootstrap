import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
  return (
    <div>
        <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
            <div className="container">
                <a href='#' className='navbar-brand'>Value Inc</a>

                <div className="collapse navbar-collapse">
                    <ul className='navbar-nav'>
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