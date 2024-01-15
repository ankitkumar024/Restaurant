import React from 'react'
import './specialities.css'
import { dragonSushi, creamySushi, rollSalmonSuhsi } from '../../assets/index.js'

const Specialities = () => {
  return (
    <div className='specialities'>
      <div className="specialities_text">
        <h1 className="specilities_text-header">
          Our Specialities
        </h1>
        <p className='specialities_text-para'>
          Authentic meals from our restaurant served with high quality ingredients.
        </p>
      </div>

      <div className="specialities_btns">
        <button className="btn active">Specialities</button>
        <button className="btn">Homestyle Sushi</button>
        <button className="btn">Steak</button>
        <button className="btn">With Rice</button>
        <button className="btn">Cocktails</button>
        <button className="btn">Appetizer</button>
      </div>

      <div className="specialities_cards">
        <div className="specialities_cards-card" >
          <img src={dragonSushi} />
          <div className="specialities_cards-card_content">
            <h2>Dragon Sushi</h2>
            <p>Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.</p>
            <span>$50</span>
          </div>
        </div>

        <div className="specialities_cards-card reverse" >
          <img src={creamySushi} />
          <div className="specialities_cards-card_content">
            <h2>Creamy Sushix</h2>
            <p>Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.</p>
            <span>$50</span>
          </div>
        </div>

        <div className="specialities_cards-card">
          <img src={rollSalmonSuhsi} />
          <div className="specialities_cards-card_content">
            <h2>Roll Salmon Suhsi</h2>
            <p>Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.</p>
            <span>$50</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Specialities