import React, { useState, useEffect } from 'react'
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import './map.css'
import { Icon } from '@iconify/react';
import basketballIcon from '@iconify/icons-fluent-emoji/basketball';

export default function Map({ location, code, courts }) {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: code
  })
  const basketballIcon = 'https://api.iconify.design/fluent-emoji/basketball.svg?width=36&height=36';

  return (
    <>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={location}
          zoom={13}
        >
          {courts.map((court) => (
            <Marker
            key={court.id}
            position={{lat: court.coordinate.x, lng: court.coordinate.y}}
            icon= {basketballIcon}
            />
          ))}
        </GoogleMap>
      )}
    </>
  )
}