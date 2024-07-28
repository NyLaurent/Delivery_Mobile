import { View, Text, StyleSheet, SafeAreaView,TouchableOpacity} from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import Constants from 'expo-constants';


const CustomHeader = () => {
  return (
    < SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.bike} source={require('../assets/images/bike.png')}/>

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
    backgroundColor: 'red',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    
  },
  text:{
    color:'blue',
    fontSize:20,
  },
  bike:{
    width: 30,
    height:30,
  }

});

export default CustomHeader;
