import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
  {
    title: 'Ending distrusts instantly',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam deleniti aliquid, omnis dolorem esse expedita, mollitia blanditiis animi in, sed vel officia? Laudantium id inventore voluptatibus numquam doloremque optio asperiores.'
  },
  {
    title: 'Becoming the Active Trend',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam deleniti aliquid, omnis dolorem esse expedita, mollitia blanditiis animi in, sed vel officia? Laudantium id inventore voluptatibus numquam doloremque optio asperiores.'
  },
  {
    title:'Message or nothing',
    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam deleniti aliquid, omnis dolorem esse expedita, mollitia blanditiis animi in, sed vel officia? Laudantium id inventore voluptatibus numquam doloremque optio asperiores.'
  },
  {
    title:'Really a boy',
    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam deleniti aliquid, omnis dolorem esse expedita, mollitia blanditiis animi in, sed vel officia? Laudantium id inventore voluptatibus numquam doloremque optio asperiores.'
  }
]
const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
        <div className="gpt3__features-heading">
          <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into the Future Today & Make it Happen.</h1>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className="gpt3__features-container">
          {featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index}/>
          ))}
        </div>
    </div>
  )
}

export default Features