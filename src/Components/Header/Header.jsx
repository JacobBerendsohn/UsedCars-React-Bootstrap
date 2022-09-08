import React from 'react'
import './Header.css'
import headerPicture from '../../Assets/images/New_Lot_Photo.png'

const Header = () => {
  return (
    <div>
        {/** Page Header */}
        <section className="header-section">
          <img className='header-image' src={headerPicture} alt="" />
          {/** <img src={logo} alt="" className="header-logo" /> */}
          {/** <img src={title} alt="" className="header-text" /> */}
        </section>

        {/** Red Bar */}
        <section className="pad-bar">
        </section>
    </div>
  )
}

export default Header