import React from 'react'
import location_pin from '../../assets/icons/location-pin.png'

function Marker() {
  return (
    <>
        <img 
        src={location_pin} 
        alt="Location Pin"
        style={{
            width: '50px',
            height: '50px'
        }}
        />
    </>
  )
}

export default Marker