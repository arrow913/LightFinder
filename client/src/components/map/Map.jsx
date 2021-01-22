import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import './style.css'

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ lights, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Come Visit The Lights</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        center={{
            lat: 35.57429,
            lng: -86.57479
        }}
        defaultZoom={zoomLevel}
      >
        {lights.map(light => (
        <LocationPin
          lat={light.lat}
          lng={light.long}
          text={light.street_address}
        />))}
      </GoogleMapReact>
    </div>
  </div>
)

export default Map