import React from 'react'
import Logo from '../assets/img/about-cake.png'

const About = () => {
  return (
    <div className='about-container'>
        <h1>Welcome to <strong>Happy Cake</strong></h1>
        <p>Place of the "Happy Cakes"</p>
        <img src={Logo} alt="" />
    </div>
  )
}

export default About