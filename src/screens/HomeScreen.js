// src/screens/HomeScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to Smart Rickshaw Booking</Text>
      <Button
        title="Book a Rickshaw"
        onPress={() => navigation.navigate('Booking')}
      />
    </View>
  );
}