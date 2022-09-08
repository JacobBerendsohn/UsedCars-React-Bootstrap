import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Footer.css';
import facebookLogo from '../../Assets/images/f_logo_RGB-White_1024.png'
import instagramLogo from '../../Assets/images/glyph-logo_May2016_white.png'
import twitterLogo from '../../Assets/images/Twitter_logo_white2.png'

const Footer = () => {
  return (
    <div>
      <nav className='footer'>
        <div className='footer-left'>
          <p className='footer-para'>
            Value Inc, 2022
          </p>
        </div>
        <ul className='footer-list'>
            <li className='list-item'>
                <a className='list-item-a' target="_blank" rel="noreferrer" href="">
                    <img className='link-image' src={facebookLogo} />
                </a>
            </li>
            <li>
                <a className='list-item-a' target="_blank" rel="noreferrer" href="">
                    <img className='link-image' src={instagramLogo} />
                </a>
            </li>
            <li>
                <a className='list-item-a' target="_blank" rel="noreferrer" href="">
                    <img className='link-image' src={twitterLogo} />
                </a>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Footer