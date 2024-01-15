import React from 'react';
import './special.css';
import { special1, special2, special3, special4, star5 } from '../../assets/index';

const Special = () => {
  return (
    <div className='todays_special'>
      <div className="todays_special-content">
        <h1 className='todays_special-content_header'>Todays's Special</h1>
        <p className='todays_special-content_para'>Special menu oftenly comes different everyday,
          this is our special food for today</p>
      </div>


      <div className="todays_special-dish_cards">
        <div className="todays_special-dish_card" >
          <img className='dish' src={special1} alt="special1" />
          <h2> Mushroom Quiche</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.</p>
          <img className='rating' src={star5} alt="rating" />
          <button className='order'>Order Now</button>
        </div>

        <div className="todays_special-dish_card" >
          <img className='dish' src={special2} alt="special2" />
          <h2>Sweet Potato</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.</p>
          <img className='rating' src={star5} alt="rating" />
          <button className='order'>Order Now</button>
        </div>

        <div className="todays_special-dish_card" >
          <img className='dish' src={special3} alt="special3" />
          <h2>Spaghetti</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.</p>
          <img className='rating' src={star5} alt="rating" />
          <button className='order'>Order Now</button>
        </div>

        <div className="todays_special-dish_card">
          <img className='dish' src={special4} alt="special4" />
          <h2>Chickpea curry</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.</p>
          <img className='rating' src={star5} alt="rating" />
          <button className='order'>Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default Special