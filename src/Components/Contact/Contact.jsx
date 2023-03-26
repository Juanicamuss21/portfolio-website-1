import React from 'react'
import "./Contact.css"
import {SiGmail} from "react-icons/si"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiGmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5 className='text-light'>juanicamuss15@gmail.com</h5>
            <a href="mailto:juanicamuss15@gmail.com" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5 className='text-light'>Juani Camus</h5>
            <a href="https://www.facebook.com/juani.camus" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5 className='text-light'>+54 9 3854353077</h5>
            <a href="https://api.whatsapp.com/send?phone=+5493854353077" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
        </div> 
        {/* END OF CONTACT OPTIONS*/}
        <form>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact