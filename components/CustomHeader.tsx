import { View, Text, StyleSheet, SafeAreaView,TouchableOpacity} from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Link } from 'expo-router';
import { TextInput } from 'react-native';

const SearchBar=()=>
  <View style={styles.searchContainer}>

    <View style={styles.searchSection}>
      <View style={styles.searcField}
      >
        <Ionicons style={styles.searchIcon} name='search-outline' size={20} color={Colors.primary}></Ionicons>
        <TextInput style={styles.input} placeholder='Restaurants, groceries, dishes'/>

        

      </View>
      <Link href={'/'} asChild>
      <TouchableOpacity style={styles.optionButton}>
        <Ionicons name='options-outline' size={20}
        color={Colors.primary
        }></Ionicons>
        </TouchableOpacity></Link>
    </View>

  </View>


const CustomHeader = () => {
  return (
    < SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.bike} source={require('../assets/images/bike.png')}/>

      </TouchableOpacity>
      <TouchableOpacity style={styles.titleContainer}>
        <Text style={styles.title}>Delivery Now</Text>
        <View style={styles.locationName}>
          <Text style={styles.subtitle}>San Franscisco, CA</Text>
          <Ionicons name='chevron-down' size={20} color={Colors.primary}></Ionicons>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={
        styles.profileButton
      }>
        <Ionicons name='person-outline' size={20} color={Colors.primary}/>
      </TouchableOpacity>
      </View>
      <SearchBar></SearchBar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor:'white',
    paddingTop: Constants.statusBarHeight, // Add padding to account for the status bar height

  },
searchSection:{
  flexDirection:'row',
  gap:10,
  flex:1,
  paddingHorizontal:20,
  alignItems:'center',
  },
  searcField:{
    flex:1,
    backgroundColor:Colors.lightGrey,
    flexDirection:'row',
    alignItems:'center',
  },
  input:{
    padding:10,
    color:Colors.mediumDark,

  },
  searchIcon:{
    paddingLeft:10,



  },

  optionButton:{
    padding:10,
    borderRadius:8,

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
 
  locationName:{
    flexDirection:'row',
       alignItems:'center',

  },
  title:{
    fontSize:14,
    color:Colors.medium,
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
  backgroundColor:Colors.lightGrey,
  padding:10,
  borderRadius:50,

},
subtitle:{
  fontSize:18,
  fontWeight:'bold',

},
searchContainer:{
  height:60,
  backgroundColor:'#fff'

},


});

export default CustomHeader;
