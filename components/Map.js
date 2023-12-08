import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";

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
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>{court.location_name}</Text>
                </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
              </View>
            </Callout>
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
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  bubble: {
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 2,
    padding: 15,
    width: 150,
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
});
