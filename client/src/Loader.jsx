import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React, { useState, useEffect, useMemo } from "react";
import Map from './Map'

export default function Loader({ code, location, courts, change }) {
  const [libraries] = useState(['visualization'])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: code,
    libraries,
  })

  return (
    <>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <Map code={code} location={location} courts={courts} change={change}  />
      )}
    </>
  )
}