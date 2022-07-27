import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(
        (item, _i) => (
          <a
            key={item + _i}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: '#313BAC' } : {}}
            href={`#${item}`}
          />
        )
      )}
    </div>
  )
}

export default NavigationDots
