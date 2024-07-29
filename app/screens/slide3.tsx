import React from 'react';
import { View, Text, Image } from 'react-native';

const Slide3 = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../../assets/images/bike.png')} />
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff' }}>Onboarding</Text>
      <Text style={{ color: '#fff' }}>Done with React Native Onboarding Swiper</Text>
    </View>
  );
};

export default Slide3;
