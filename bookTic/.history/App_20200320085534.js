/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {

  StyleSheet,
  View,
 
} from 'react-native';


import Signup from './Screens/Signup';
import Login from './Screens/Login';

import Routes from './Networks/Routes';
import {theme} from './Constants/themes';

export default class App extends Component <{}> {
   
   render(){

  return (
    
      <View style={styles.container}>
       
        <Routes />
            

      </View>
    
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
   
   }

 });

