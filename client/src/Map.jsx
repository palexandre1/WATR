/* global google */

import React, { useState, useEffect } from 'react'
import { GoogleMap, Marker, useLoadScript, HeatmapLayer } from "@react-google-maps/api";
import './map.css'
import { Icon } from '@iconify/react';
import basketballIcon from '@iconify/icons-fluent-emoji/basketball';
import Popup from './Popup';

export default function Map({ location, code, courts }) {
  const [show, setShow] = useState(false);
  const [place, setPlace] = useState({});
  const [data, setData] = useState([]);

  const basketballIcon = 'https://api.iconify.design/fluent-emoji/basketball.svg?width=36&height=36';

  const openModal = (court) => {
    setShow(true)
    setPlace(court)
  }
  const closeModal = () => {
    setShow(false);
  }

  useEffect(()=> {
    var heatMapData = []
    courts.map((court, i) => {
      var weightedLocation = {
        location: new google.maps.LatLng(court.coordinate.x, court.coordinate.y),
        weight: court.player_count
      }
      heatMapData.push(weightedLocation)
    })
    setData(heatMapData)
    // console.log(data)
  }, [])

  return (
    <>
      {
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
            onClick={()=>openModal(court)}

            />
          ))}
          {show && <Popup court={place} show={show} close={closeModal}/>}
            <HeatmapLayer data={data} />
        </GoogleMap>
      }
    </>
  )
}