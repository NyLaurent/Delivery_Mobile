import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='index'/>
        <Tabs.Screen name='users'/>
    </Tabs>
  )
}

export default TabsLayout