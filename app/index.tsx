import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const Page = () => {
  return (
    <View>
      <Text>Page</Text>
    </View>
  )
}

export default Page