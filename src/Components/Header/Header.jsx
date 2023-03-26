import React from 'react'
import "./Header.css"
import CTA from './CTA'
import ME from "../../assets/me.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className='container header_container'>
        <h5>Hello i'm a</h5>
        <h1>Juan Ignacio Camus</h1>
        <h5 className='text-light'>Full stack developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt="Me"/>        
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header