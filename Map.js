import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {Marker} from 'react-native-maps';

export default function Map() {
    const [mapRegion, setMapRegion] = useState({
    latitude: 39.73847,
    longitude: -104.99027,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <MapView
      region={mapRegion}
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  });
