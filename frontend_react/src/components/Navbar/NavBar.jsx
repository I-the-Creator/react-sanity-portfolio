import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import { images } from '../../constants'

import './NavBar.scss'

const NavBar = () => {
  const [toggle, setToggle] = useState(false)

  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  }

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            //Animation Option 1
            initial={{ x: [300, 0], opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}

            //Animation Option 2 - with variants
            // variants={cardVariants}
            // initial="offscreen"
            // whileInView="onscreen"

            //Animation Option 3
            // whileInView={{ x: [300, 0] }}
            // transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
