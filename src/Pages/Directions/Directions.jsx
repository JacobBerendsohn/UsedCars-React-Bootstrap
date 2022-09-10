import React from 'react'
import './Directions.css'

const Directions = () => {
  return (
    <div>
        {/** Directions text */}
        <section className='directions-text-section'>
          <h1 className="directions-title">
            Directions:
          </h1>
          <div className='div-break' />
          <p className='directions-paragraph'>
            Value, Inc. is conveniently located at 2259 State St. (US Rt. 5) in Hamden, Connecticut, the site of the famous “Quonset Hut”.
            <div className='div-break' />
            <h4 className="directions-from">
            From Hartford/Springfield and points North:
            </h4>
            <div className='div-break' />
            I-91 South to Exit 10 onto the Rt. 40 connector.  Get off the connector at Exit 1.  At the end of the exit, turn right. Go to the first traffic light and turn right onto State St (Rt. 5). Go South on State St. for 2.7 miles and Value, Inc. will be on your left.
            <div className='div-break' />
            <h4 className="directions-from">
            From Bridgeport, Fairfield County CT, CT shoreline West of New Haven, Bronx and Brooklyn NY and points West:
            </h4>
            <div className='div-break' />
            I-95 North to New Haven then I-91 North to Exit 5.  At end of ramp, merge straight onto State St. (Rt. 5 N).  Go 2.1 miles and Value, Inc. will be on your right.
            <div className='div-break' />
            <h4 className="directions-from">
            From New London, Providence, Boston, CT Shoreline East of New Haven:
            </h4>
            <div className='div-break' />
            I-95 North to New Haven then I-91 North to Exit 5.  At end of ramp, merge straight onto State St. (Rt. 5 N).  Go 2.1 miles and Value, Inc. will be on your right.
            <div className='div-break' />
          </p>
        </section>

        {/** Map Section */}
        <section className="map-section">
          <div className="map-container">
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.4632300892968!2d-72.8949767!3d41.3422841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d0ab1043aa45%3A0x4bd588b1b72502e1!2s2259%20State%20St%2C%20Hamden%2C%20CT%2006517!5e0!3m2!1sen!2sus!4v1662737806963!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>  
    </div>
  )
}

export default Directions