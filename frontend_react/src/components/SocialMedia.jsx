import React from 'react'

//Icons
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="http://twitter.com" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="http://facebook.com" target="_blank">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="http://instagram.com" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
