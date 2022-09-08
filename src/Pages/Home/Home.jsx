import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Home.css'
import headerPicture from '../../Assets/images/New_Lot_Photo.png'
import uniqueButton from '../../Assets/images/UniqueButton.png'
import purchasingButton from '../../Assets/images/PurchaseLeaseButton.png'
import rentalButton from '../../Assets/images/RentalButton.png'
import inventoryButton from '../../Assets/images/InventoryButton.png'
import preapprovalButton from '../../Assets/images/PreapprovalButton.png'
import aboutUsPic from '../../Assets/images/AboutUs.png'
import signaturePete from '../../Assets/images/PeteSignature.png'
import logo from '../../Assets/images/logo-with-silver-effect.png'
import title from '../../Assets/images/SalesLeasingRentals.png'

const Home = () => {
  return (
    <div>
        {/** Page Header */}
        <section className="header-section">
          <img className='header-image' src={headerPicture} alt="" />
          <img src={logo} alt="" className="header-logo" />
          {/** <img src={title} alt="" className="header-text" /> */}
        </section>
        
        
        {/** Red Bar */}
        <section className="pad-bar">
        </section>

        {/** Grid Button Section */}
        {/** TODO: Add correct routes to LINK elements */}
        <section className="p-4">
          <div className="container">
            <div className="row text-center">

              <div className="col-md pb-3 grid-main">
                <Link to='/'>
                  <img className='grid-button' src={uniqueButton} />
                </Link>
              </div>

              <div className="col-md pb-3 grid-main">
                <Link to='/'>
                  <img className='grid-button' src={purchasingButton} />
                </Link>
              </div>

              <div className="col-md pb-3 grid-main">
                <Link to='/'>
                  <img className='grid-button' src={rentalButton} />
                </Link>
              </div>
            </div>

            <div className="row text-center">

              <div className="col-md pb-3 grid-main-bottom-l">
                <Link to='/'>
                  <img className='grid-button-bottom' src={inventoryButton} />
                </Link>
              </div>

              <div className="col-md pb-3 grid-main-bottom-r">
                <Link to='/'>
                  <img className='grid-button-bottom' src={preapprovalButton} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/** About Us picture */}
        <section className='about-us-section'>
            <img className='about-us-image' src={aboutUsPic} alt="" />
        </section>

        {/** About Us text */}
        <section className='about-us-text-section'>
            <div className='about-us-info'>
              <p className='about-us-paragraph'>
                <strong>Value…</strong> it’s more than our name, it’s what we deliver!
                <div className='div-break' />
                Welcome to <strong>Value Inc.</strong>, a family owned and operated business, where we promise to deliver <strong>value</strong> to you at every stage
                of your car buying experience.
                <div className='div-break' />
                We <strong>value</strong> your time and will show you vehicles that meet your individual needs and are carefully selected, tested, and
                prepared to deliver long worry-free ownership.
                <div className='div-break' />
                We <strong>value</strong> your participation in the process and make sure that you get all the information you need, clearly and precisely,
                whether you pay cash, finance, or lease your vehicle. No one understands your needs better than you, so we will offer
                you a selection of optional products such as extended warrantees that are designed to deliver a good <strong>value</strong> for your
                hard-earned money.
                <div className='div-break' />
                We <strong>value</strong> the trust you place in our family by purchasing or leasing your vehicle from us, and strive to build a relationship
                that will have you coming back for your next vehicle… and your next.
                <div className='div-break' />
                As President of <strong>Value Inc.</strong>, I pride myself on delivering good, honest, old-fashioned <strong>value</strong> to each and every customer,
                with each and every vehicle, each and every time. Come in today and let us welcome you!
              </p>
              <img className='signature-image' src={signaturePete} alt="" />
              <p className='p-2'>
                Peter Saldamarco,<br/>
                Licensed dealer, CT DMV since 1977
              </p>
          </div>
        </section>

    </div>
  )
}

export default Home