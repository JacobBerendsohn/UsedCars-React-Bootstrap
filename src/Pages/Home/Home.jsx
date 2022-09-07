import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Home.css'
import lotPic from '../../Assets/images/lot.png'

const Home = () => {
  return (
    <div>
        {/** Page Header */}
        <section className="bg-secondary text-light p-5 text-center text-md-start">
            <div className="container">
                <div className='d-sm-flex align-items-center justify-content-between'>
                    <div className='p-5'>
                        <h1><span className="text-red-500">Value Inc.</span> Used Cars</h1>
                        <h3>Sales • Leasing • Rentals</h3>
                        <br/>
                        <button className="btn btn-primary btn-lg"> Find your vehicle</button>
                    </div>
                    <img className='img-fluid w-50 d-none d-md-block' src={lotPic} alt="" />
                </div>
            </div>
        </section>
        
        {/** Search Bar */}
        <section className="bg-gray-900 text-light p-5">
          <div className="container">
            <div className="d-md-flex justify-content-between align-items-center">
              <h3 className="mb-3 mb-md-0">Find your dream car with us!</h3>
              <div class="input-group search-input">
                <input type="text" class="form-control" placeholder="What are you looking for?"/>
                <button class="btn btn-secondary btn-large" type="button">Search</button>
              </div>
            </div>
          </div>
        </section>

        {/** Grid Section */}
        <section className="p-4">
          <div className="container">
            <div className="row text-center pb-4">

              <div className="col-md">
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

              <div className="col-md">
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
                    <a href="" className="btn btn-dark">Learn More</a>
                  </div>
                </div>
              </div>

              <div className="col-md">
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

              <div className="col-md">
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
                    <a href="" className="btn btn-dark">Learn More</a>
                  </div>
                </div>
              </div>

              <div className="col-md">
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