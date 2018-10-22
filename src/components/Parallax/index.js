import React from 'react'
import { Parallax } from 'react-spring'

// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? 'url(' : ''
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`

class ParallaxComponent extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={3}>
        <Parallax.Layer
          offset={1}
          speed={1}
          style={{ backgroundColor: 'pink' }}
        />
        <Parallax.Layer
          offset={2}
          speed={1}
          style={{ backgroundColor: '#9dc0f9' }}
        />

        <Parallax.Layer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        <Parallax.Layer
          offset={1}
          speed={-0.3}
          factor={2}
          style={{ pointerEvents: 'none' }}
        >
          <img
            src={url('satellite4')}
            style={{ width: '15%', marginLeft: '70%' }}
          />
        </Parallax.Layer>

        <Parallax.Layer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <img src={url('earth')} style={{ width: '30%' }} />
        </Parallax.Layer>
      </Parallax>
    )
  }
}

export default ParallaxComponent
