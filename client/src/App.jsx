import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React, { useState, useEffect, useMemo } from "react";
import "./styles.css";
import Map from './Map'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const location = {
  lat: 39.73847,
  lng: -104.99027,
}

const App = () => {
  const [key, setKey] = useState('');
  const [courts, setCourts] = useState([]);

  useEffect(() => {
    axios.get('/key')
      .then((response) => {
        setKey(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
      axios.get("/courts")
      .then((response) => {
        // console.log(response.data)
        setCourts(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="App">
      {key.length === 39 &&
        <Map code={key} location={location} courts={courts} />
      }
    </div>
  );
};

export default App;