import React from 'react'
import './events.css'
import { event1, event2, event3 } from '../../assets/index'

const Events = () => {
  return (
    <div className='dining_events' id='events'>
      <div className="dining_events-text">
        <h1 className='dining_events-text_header'>Dining Events</h1>
        <p className='dining_events-text-para'>
          We provide dining event for your special day with your important people
        </p>
      </div>

      <div className="dining_events-btns">
        <button className="btn active">
          Private Events
        </button>
        <button className="btn">
          Corporate Events
        </button>
      </div>

      <div className="dining_events-cards">
      <div className="dining_events-cards-card">
          <img src={event1} />
          <div className="dining_events-cards-card_content">
            <h2>Fine Dining</h2>
            <p>Bottle of Champagne Dine Sushi Tower For 2+ Dessert</p>
            <span>$500</span>
            
          </div>
        </div>

        <div className="dining_events-cards-card reverse">
          <img src={event2}/>
          <div className="specialities_cards-card_content">
            <h2>Gold Dining</h2>
            <p>Bottle of Champagne Secret Menu Sushi For 2+ Desert</p>
            <span>$1000</span>
          </div>
        </div>

        <div className="dining_events-cards-card">
          <img src={event3} />
          <div className="dining_events-cards-card_content" >
            <h2>Royalty Dining</h2>
            <p>Bottle of Luxury Champagne Special Menu Sushi for 2+ Royal Desert</p>
            <span>$1500</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events