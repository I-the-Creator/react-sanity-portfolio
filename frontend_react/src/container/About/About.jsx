import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'

import './About.scss'

const abouts = [
  {
    title: 'Frontend Development',
    description: 'I am a good web developer',
    imgUrl: images.about01,
  },
  {
    title: 'Backend Development',
    description: 'I am a good web developer',
    imgUrl: images.about02,
  },
  {
    title: 'Web Development',
    description: 'I am a good web developer',
    imgUrl: images.about03,
  },
  {
    title: 'MERN Stack',
    description: 'I am a good web designer',
    imgUrl: images.about04,
  },
]

const About = () => {
  return (
    <div className="app__about" id="about">
      <h2 className="head-text">
        I Know That <span>Good Frontend</span> <br /> means{' '}
        <span>Good Mood</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, _i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + _i}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 20 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default About
