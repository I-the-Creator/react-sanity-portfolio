import React, { useState } from 'react'

import { images } from '../../constants'

//HOC
import { AppWrap, MotionWrap } from '../../wrapper'

//Sanity client
import { client } from '../../client'

import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  //formData destructure
  const { name, email, message } = formData

  const handleChangeInput = (e) => {
    //destructure event.target object
    const { name, value } = e.target

    //update current formData state object
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    // object for Sanity
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    // send data to Sanity CMS
    client
      .create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <h2 className="head-text">Take a coffee and chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:andrey.burluckiy@gmail.com" className="p-text">
            andrey.burluckiy@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+48 519 308 574" className="p-text">
            +48 519 308 574
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              value={name}
              name="name"
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Email"
              value={email}
              name="email"
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              value={message}
              name="message"
              onChange={handleChangeInput}
              placeholder="Your Message"
              className="p-text"
            />
          </div>
          <button className="p-text" type="button" onClick={handleSubmit}>
            {loading ? 'Sending...' : 'Send Me Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>`
        </div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
