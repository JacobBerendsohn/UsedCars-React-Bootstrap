import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Home.css'
import headerPicture from '../../Assets/images/iStock-157293636BW.png'
import uniqueButton from '../../Assets/images/UniqueButton.png'
import purchasingButton from '../../Assets/images/PurchaseLeaseButton.png'
import rentalButton from '../../Assets/images/RentalButton.png'
import inventoryButton from '../../Assets/images/InventoryButton.png'
import preapprovalButton from '../../Assets/images/PreapprovalButton.png'
import aboutUsPic from '../../Assets/images/AboutUs.png'

const Home = () => {
  return (
    <div>
        {/** Page Header */}
        <section className="header-section">
          <img className='header-image' src={headerPicture} alt="" />
        </section>
        
        
        {/** Red Bar */}
        <section className="pad-bar">
        </section>

        {/** Grid Button Section */}
        {/** TODO: Add correct routes to LINK elements */}
        <section className="pt-4">
          <div className="container">
            <div className="row text-center">

              <div className="col-md pb-3">
                <Link to='/'>
                  <img className='grid-button' src={uniqueButton} />
                </Link>
              </div>

              <div className="col-md pb-3">
                <Link to='/'>
                  <img className='grid-button' src={purchasingButton} />
                </Link>
              </div>

              <div className="col-md pb-3">
                <Link to='/'>
                  <img className='grid-button' src={rentalButton} />
                </Link>
              </div>
            </div>

            <div className="row text-center">

              <div className="col-md pb-3">
                <Link to='/'>
                  <img className='grid-button-bottom' src={inventoryButton} />
                </Link>
              </div>

              <div className="col-md pb-3">
                <Link to='/'>
                  <img className='grid-button-bottom' src={preapprovalButton} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/** About Us picture */}
        <section className='about-us-section'>
          <div>
            <img className='about-us-image' src={aboutUsPic} alt="" />
          </div>
        </section>

        {/** About Us text */}
        <section className='about-us-text-section'>
            <div className='about-us-text'>
              <p className='about-us-paragraph'>
                Value… it’s more than our name, it’s what we deliver!
                Welcome to Value Inc., a family owned and operated business, where we promise to deliver value to you at every stage
                of your car buying experience.
                We value your time and will show you vehicles that meet your individual needs and are carefully selected, tested, and
                prepared to deliver long worry-free ownership.
                We value your participation in the process and make sure that you get all the information you need, clearly and precisely,
                whether you pay cash, finance, or lease your vehicle. No one understands your needs better than you, so we will offer
                you a selection of optional products such as extended warrantees that are designed to deliver a good value for your
                hard-earned money.
                We value the trust you place in our family by purchasing or leasing your vehicle from us, and strive to build a relationship
                that will have you coming back for your next vehicle… and your next.
                As President of Value Inc., I pride myself on delivering good, honest, old-fashioned value to each and every customer,
                with each and every vehicle, each and every time. Come in today and let us welcome you!
              </p>
          </div>
        </section>

    </div>
  )
}

export default Home