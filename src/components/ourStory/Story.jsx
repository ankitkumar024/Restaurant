import React from 'react'
import './story.css'
import { ourStory } from '../../assets/index'

const Story = () => {
  return (
    <div className='story'>
      <div className="story_text">
        <h1 className='story_text-header'>Our Story</h1>
        <p className='story_text-para'>A journey for making successful luxury restaurant
          with the best services</p>
      </div>

      <div className="story_card">
        <img src={ourStory} />
        <div className="story_card-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat urna id leo euismod rhoncus. Aliquam erat volutpat. Nulla id aliquam neque, at dignissim quam. Praesent et lacus accumsan, consequat nisl a, mattis sapien.
            Nam sodales ullamcorper aliquet. Phasellus ut pretium libero, vitae imperdiet purus. Sed sed tincidunt velit. Aliquam vitae ipsum molestie, vehicula nisi quis, finibus leo.</p>
          <span>More...</span>
        </div>
      </div>
    </div>
  )
}

export default Story