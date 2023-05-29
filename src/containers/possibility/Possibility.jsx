import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilites are beyond your imagination</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto necessitatibus, culpa error eligendi maiores. Ad ea sapiente, amet laboriosam, quia vel alias eos molestiae vero itaque hic doloremque modi.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default possibility