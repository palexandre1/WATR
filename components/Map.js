import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout, CalloutSubview, Heatmap } from "react-native-maps";

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
  const [data, setData] = useState([]);
  const [weight, setWeight] = useState(0);

  const playingHere = (court) => {

    //**IDEA**
    //Make the weighted locations array into a state. Update state every time this function is called.
    //Add state as a dependency on useEffect

    let playerCount = court.player_count;
    axios.put(`http://localhost:3000/courts/${court.id}`).then(() => {
      playerCount += 1;
      setWeight(playerCount);
      console.log(playerCount)
    });
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
      });
  }, [weight]);

  useEffect(() => {
    const heatMapData = [];
    if (courts) {
      courts.map((court, i) => {
        const weightedLocation = {
          latitude: court.coordinate.x,
          longitude: court.coordinate.y,
          weight: court.player_count,
        };
        heatMapData.push(weightedLocation);
      });
      setData(heatMapData);
    }
  }, [weight]);

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
          >
            <Image source={ballImg} style={{ height: 25, width: 25 }} />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>{court.location_name}</Text>
                  <CalloutSubview onPress={() => playingHere(court)}>
                    <Text>I'm Playing</Text>
                  </CalloutSubview>
                </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
              </View>
            </Callout>
          </Marker>
        ))}
      <Heatmap points={data} radius={50} opacity={0.5} />
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
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 2,
    padding: 15,
    width: 150,
    zIndex: 3,
  },
  arrow: {
    alignSelf: "center",
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 20,
    borderRightWidth: 10,
    borderBottomWidth: 0,
    borderLeftWidth: 10,
    borderTopColor: "black",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
  },
  button: {
    zIndex: 5,
  },
});
