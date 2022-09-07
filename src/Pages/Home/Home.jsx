import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Home.css'
import lotPic from '../../Assets/images/lot.png'

const Home = () => {
  return (
    <div>
        {/** Page Header */}
        <div className='section-container'>
            <div className="header-text">
                SALES • LEASING • RENTALS
            </div>
          <section className="bg-secondary text-light p-5 text-center text-md-start background-image">

          </section>
        </div>
        
        {/** Blue Bar */}
        <section className="pad-bar">
        </section>

        {/** Grid Section */}
        <section className="p-4">
          <div className="container">
            <div className="row text-center">

              <div className="col-md pb-3">
                <div className="card bg-dark text-light">
                  <div className="card-body text-center">
                    <div className="h1 mb-3">
                      <i className="bi bi-patch-question-fill"></i>
                    </div>
                    <h3 className="card-title mb-3">
                      Want to know what makes us Unique?
                    </h3>
                    <p className="card-text">
                      There really is a difference!
                    </p>
                    <a href="" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>

              <div className="col-md pb-3">
                <div className="card bg-gray-700 text-light">
                  <div className="card-body text-center">
                    <div className="h1 mb-3">
                      <i className="bi bi-cash-coin"></i>
                    </div>
                    <h3 className="card-title mb-3">
                      Purchasing and Leasing Options
                    </h3>
                    <p className="card-text">
                      Yes you can lease a used car!
                    </p>
                    <a href="" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>

              <div className="col-md pb-3">
                <div className="card bg-gray-600 text-light">
                  <div className="card-body text-center">
                    <div className="h1 mb-3">
                      <i className="bi bi-file-earmark-text"></i>
                    </div>
                    <h3 className="card-title mb-3">
                      Long Term Rental / Short Term Lease
                    </h3>
                    <p className="card-text">
                      There really is a difference!
                    </p>
                    <a href="" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row text-center">

              <div className="col-md pb-3">
                <div className="card bg-gray-600 text-light">
                  <div className="card-body text-center">
                    <div className="h1 mb-3">
                      <i className="bi bi-car-front"></i>
                    </div>
                    <h3 className="card-title mb-3">
                      View our Inventory
                    </h3>
                    <p className="card-text">
                      Available for immediate delivery!
                    </p>
                    <a href="" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>

              <div className="col-md pb-3">
                <div className="card bg-dark text-light">
                  <div className="card-body text-center">
                    <div className="h1 mb-3">
                      <i className="bi bi-clipboard-check"></i>
                    </div>
                    <h3 className="card-title mb-3">
                      Pre-Approval
                    </h3>
                    <p className="card-text">
                      All credit is welcome!
                    </p>
                    <a href="" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}

export default Home