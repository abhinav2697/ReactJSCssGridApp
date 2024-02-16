import React from 'react';
import './Featured.css';
import House1 from '../../assets/house1.jpg'
import Bed1 from '../../assets/bed1.jpg'
import Bed2 from '../../assets/bed2.jpg'
import kitchen from '../../assets/kitchen.jpg'
import Bathroom from '../../assets/bath1.jpg'

const Featured = () => {
  return (
    <div className='featured'>
      <h1 className='featured-text'>Top Featured Listings</h1>
      <p>Selected listings by City, State, & Zip based on views. </p>
      <div className='container'>
        <img src={House1} alt='' />
        <img src={Bed1} alt='' />
        <img src={Bed2} alt='' />
        <img src={kitchen} alt='' />
        <img src={Bathroom} alt='' />
        <div className='span-3 img-details'>
          <div className='top'>
            <h2>123 Acme Hi-tech City, Hyderabad</h2>
            <p>House for Sale</p>
            <p className='price'>₹26,77,000</p>
          </div>
          <div className='info-grid'>
            <div>
              <div className='info'>
                <p className='bold'>Bedrooms:</p><p>5</p>
              </div>
              <div className='info'>
                <p className='bold'>Bathrooms:</p><p>7</p>
              </div>
              <div className='info'>
                <p className='bold'>Square Feet:</p><p>8,138</p>
              </div>
              <div className='info'>
                <p className='bold'>Est Payment:</p><p>₹1,47,970/month</p>
              </div>
            </div>
          </div>
        </div> 
        
      </div>
    </div>
  )
}

export default Featured