import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Container } from './styles'
import Marker from '../Marker/index'

function LocalizationMap() {

    const defaultProps = {
        center: {
          lat: -23.61217793701547,
          lng: -46.67613810469508
        },
        zoom: 19
    };

    return (
        <Container
        style={{ 
        height: '100vh', 
        width: '100%', 
        }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            >
                <Marker
                lat={-23.61212878404553}
                lng={-46.67621454765096}
                />
            </GoogleMapReact>
        </Container>
    )
}

export default LocalizationMap