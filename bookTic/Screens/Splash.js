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
        
           <Image 
            style={styles.backGroundStyle}
            source={require('../Constants/Assets/BgPattern.png')}
           ></Image>  
       
         
        <Image 
          style={styles.roadMapStyle}
          source={require('../Constants/Assets/roadmap.png')}
        ></Image>  
       

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
    fontSize:30,
    fontWeight: 'normal',
    color: 'black',
    
   },

   logoContainer:{
      
       alignContent:'center',
       alignItems: 'center',
       justifyContent:'center'
   },

   logoStyle:{

    width:Dimensions.get('window').width /6,
    height:Dimensions.get('window').height /7,
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    marginTop: 40

   },
   backGroundStyle: {
     position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.1
   },
   roadMapStyle:{
        position: 'absolute',
        backgroundColor:'transparent',
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height /7,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center'


   }
 });
 