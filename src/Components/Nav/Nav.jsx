import React, { useState } from 'react'
import "./Nav.css"
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai"
import {BiBook, BiMessageSquareDetail} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import { Link } from 'react-scroll'


const Nav = () => {

  return (
    <nav>
      <Link to='home' activeClass='active' className='Link' spy={true}>     
      <AiOutlineHome/>    
      </Link>
      <Link to='about' activeClass='active' className='Link' spy={true}>     
      <AiOutlineUser/>    
      </Link>
      <Link to='experience' activeClass='active' className='Link' spy={true}>     
      <BiBook/>    
      </Link>
      <Link to='services' activeClass='active' className='Link' spy={true}>     
      <RiServiceLine/>    
      </Link>
      <Link to='contact' activeClass='active' className='Link' spy={true}>     
      <BiMessageSquareDetail/>    
      </Link>
    </nav>
  )
}

export default Nav