import React from 'react'
import Lottie from 'lottie-react-web'
import profileAnimation from '../assets/profile_animation.json'

export default () => (
  <div className="row slide home">
    <div className="col">
      <h1>
        I&apos;m
        {' '}
        <span id="name">Henry</span>
        ,
        {' '}
        <br />
        React Native Developer
      </h1>
      <p className="sub-text">Front End Developer / Mobile Developer / SwiftUI enthusiast</p>
    </div>
    <Lottie options={{ animationData: profileAnimation }} />
  </div>
)