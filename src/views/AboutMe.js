import React from 'react'
import animoji from '../assets/animoji.png'

export default () => (
  <div className="row slide profile">
    <div className="col left-col">
      <h1>About Me</h1>
      <p>
        I&apos;m very passionate about implementing beautiful and seamless UIs on Web and Mobile.
      </p>
    </div>
    <img src={animoji} alt="Henry's animaji" />
  </div>
)
