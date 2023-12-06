import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import ballImg from "../assets/png-clipart-basketball-ball-game-graphy-sports-basketball-game-orange-thumbnail.png";

const ballImageUri = Image.resolveAssetSource(ballImg).uri

export default function Map() {
  const [courts, setCourts] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 39.73847,
    longitude: -104.99027,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const onMarkerPress = () => {
    console.log("A Marker was pressed!");
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/courts")
      .then((response) => {
        // console.log(response.data)
        setCourts(response.data);
      })
      .catch((error) => {
        console.log(error);
        console.log("here");
      });
  });

  // console.log(courts)
  return (
    <MapView region={mapRegion} style={styles.map} provider={PROVIDER_GOOGLE}>
      {courts &&
        courts.map((court) => (
          <Marker
            key={court.id}
            title={court.location_name}
            coordinate={{
              latitude: court.coordinate.x,
              longitude: court.coordinate.y,
            }}
            onPress={(e) => onMarkerPress()}
          >
            <Image source={ballImg} style={{ height: 35, width: 35 }} />
          </Marker>
        ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
