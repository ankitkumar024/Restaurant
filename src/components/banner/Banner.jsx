import React from 'react'
import './banner.css'
import { banner } from '../../assets/index'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner_img">
            <img src={banner} />
        </div>
    </div>
  )
}

export default Banner