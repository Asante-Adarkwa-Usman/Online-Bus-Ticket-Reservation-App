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



export default class Splash extends Component{

    
    render(){

    
        return(
        
      <View  style= {styles.container}>
           
       
       <View style={styles.logoContainer}>
        
        <Image 
         style={styles.logoStyle}
          source={require('../Constants/Assets/logo.png')}
        ></Image>

        </View>
       
        <Text 
          style= {styles.textHeader}>
          bookTic
        </Text>
       
       </View>
        );
    }
}


const styles = StyleSheet.create({
  container:
   {
    flex: 1,
    alignContent:'center',
    justifyContent:'center',
    flexDirection:'column',
    alignItems: 'center',
    backgroundColor: '#FECE21',
    borderRightColor:theme.color.orange,
    borderLeftColor:theme.color.orange,
    fontFamily: 'sans serif'
    

  },

textHeader:
{
    
    fontFamily: 'sans serif',
    fontSize:35,
    fontWeight: 'normal',
    marginTop: 10,
    color: 'black',
    marginBottom: 20,
    padding:10
   },

   logoContainer:{
      
       alignContent:'center',
       alignItems: 'center',
       justifyContent:'center'
   },

   logoStyle:{

    width:Dimensions.get('window').width /7,
    height:Dimensions.get('window').height /7,
    backgroundColor: 'transparent'

   }
 });
 