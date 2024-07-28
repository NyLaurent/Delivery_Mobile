import { View, Text, StyleSheet, SafeAreaView,TouchableOpacity} from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';


const CustomHeader = () => {
  return (
    < SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.bike} source={require('../assets/images/bike.png')}/>

      </TouchableOpacity>
      <TouchableOpacity style={styles.titleContainer}>
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={
        styles.profileButton
      }>
        <Ionicons name='person-outline' size={20} color={Colors.primary}/>
      </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor:'white',
    paddingTop: Constants.statusBarHeight, // Add padding to account for the status bar height

  },
  container: {
    height:60,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:20,
    gap:20,
    
  },
  text:{
    color:'blue',
    fontSize:20,
  },
  bike:{
    width: 30,
    height:30,
  },
  titleContainer:{
flex:1

  },
profileButton:{

}


});

export default CustomHeader;
