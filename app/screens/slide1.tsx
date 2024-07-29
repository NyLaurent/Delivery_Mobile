import React from 'react';
import { View, Text, Image } from 'react-native';

const Slide1 = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../../assets/images/bike.png')} />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Onboarding</Text>
      <Text>Done with React Native Onboarding Swiper</Text>
    </View>
  );
};

export default Slide1;
