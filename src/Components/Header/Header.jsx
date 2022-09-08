import React from 'react'
import './Header.css'
import headerPicture from '../../Assets/images/New_Lot_Photo.png'
import logo from '../../Assets/images/logo-with-silver-effect.png'

const Header = () => {
  return (
    <div>
        {/** Page Header */}
        <section className="header-section">
          <img className='header-image' src={headerPicture} alt="" />
          {/** Header Logo Option 2 */}
          {/** <img src={logo} alt="" className="header-logo" /> */}
        </section>

        {/** Red Bar */}
        <section className="pad-bar">
        </section>
    </div>
  )
}

export default Header