/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,Image,Keyboard,
  Text,Dimensions,
  StatusBar,TouchableWithoutFeedback,
  TextInput,KeyboardAvoidingView, Alert,
} from 'react-native';

import {theme} from '../Constants/themes';
import Button from 'react-native-button';




export default class Location extends Component{






	render(){

		return(

              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

              <View style={styles.container} >
                
                <Text style= {styles.textHeader}>Welcome to Location page</Text>
                
              </View>

             </TouchableWithoutFeedback>
			);

	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
    justifyContent:'center',
    flexDirection:'column',
    alignItems: 'center',
    backgroundColor: '#FECE21',
    borderRightColor:theme.color.orange,
    borderLeftColor:theme.color.orange,
    
    
 
  },
   textHeader:{
   flex:1 ,
   fontFamily:'cursive',
   fontSize:35,
   fontWeight: 'bold',
   marginTop: 30,
   color: theme.color.black,
   marginBottom: 20,
   padding:10
  }

});