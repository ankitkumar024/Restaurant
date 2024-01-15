import React from 'react'
import './footer.css'
import {footerImg, call, location } from '../../assets/index'

const footer = () => {
  return (
    <div className='footer' id='footer'>
      <img className='footer_Img' src={footerImg} />
      <div className='footer_text'>
        <h1 className='footer_text-header'>
          We are always ready to surprise you with the new flavours
        </h1>
      </div>

      <div className="footer_contact">
          <div className="footer_contact-location">
            <img src={location} />
            <p>Flavo, (Copenhagen, Denmark)</p>
          </div>
          <div className="footer_contact-location">
            <img src={call} />
            <p>0122</p>
          </div>
      </div>
    </div>
  )
}

export default footer