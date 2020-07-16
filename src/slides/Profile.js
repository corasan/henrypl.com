import React from 'react'
import Lottie from 'lottie-react-web'
import profileAnimation from '../assets/profile_animation.json'

export default () => {

  return (
    <div className="row slide">
      <div className="col">
        <h1>
          I'm Henry, <br />
          React Native Developer
        </h1>
        <p className="sub-text">Front End Developer / Mobile Developer</p>
      </div>
      <Lottie options={{ animationData: profileAnimation }} height="55%" width="55%" />
    </div>
  )
}
