// src/screens/BookingScreen.js

import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

export default function BookingScreen() {
  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} />
      <Text>Select your pick-up and drop-off locations</Text>
      {/* Implement booking form here */}
    </View>
  );
}