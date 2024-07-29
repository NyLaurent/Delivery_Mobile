import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import useRouter from 'expo-router'
const index = () => {
  const router = useRouter()

    
  return (
    <Onboarding
    onSkip={()=>router.navigate("/Home")}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/images/bike.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
      backgroundColor: 'red',
      image: <Image source={require('../assets/images/bike.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
      backgroundColor: 'blue',
      image: <Image source={require('../assets/images/bike.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
      
    },
    
  ]}
/>
  )
}

export default index