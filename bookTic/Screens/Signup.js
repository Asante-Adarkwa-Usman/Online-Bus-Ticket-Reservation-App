/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,Image,Keyboard,
  Text,Dimensions,
  StatusBar,TouchableWithoutFeedback,TouchableOpacity,
  TextInput,KeyboardAvoidingView, Alert,
} from 'react-native';

import {theme} from '../Constants/themes';
import Button from 'react-native-button';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/Login';


export default class Signup extends Component {

  render(){

      let btnSignupPressed = ()=>{

        Alert. alert("Account Registeration","signup successful");
      }
        return(
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View  style= {styles.container}>

            <Image
         style={styles.backGroundStyle}
          source={require('../Constants/Assets/BgPattern.png')}
        ></Image>

            <View style={styles.logoContainer}>

        <Image
         style={styles.logoStyle}
          source={require('../Constants/Assets/logo.png')}
        ></Image>

        </View>

        <Text style= {styles.textHeader}>Register</Text>



       <View style={ styles.inputContainer }>
            <Image
         style={styles.backGroundStyle}
          source={require('../Constants/Assets/BgPattern.png')}
        ></Image>

          <Image
          style={styles.roadMapStyle}
          source={require('../Constants/Assets/roadmap.png')}
        ></Image>


        <View style= { {alignContent:'center',justifyContent:'center',alignItems:'center',margin:20} }>

       <TextInput  style={styles.input}

       placeholder="email"
       placeholderTextColor={theme.color.greyDarker}
       keyboardType='email-address'
       autoCorrect={false}
       returnKeyType= 'next'



       />

       <TextInput  style={styles.input}

       placeholder="password"
       placeholderTextColor={theme.color.greyDarker}
       autoCorrect={false}
       secureTextEntry={true}


       />

       <TextInput  style={styles.input}

       placeholder="confirm password"
       placeholderTextColor={theme.color.greyDarker}
       autoCorrect={false}
       secureTextEntry={true}


       />

      <Button style={styles.btnContainer}
       onPress= {btnSignupPressed}
       >
       Signup

        </Button>

       <View style={styles.linkContainer}>
        <Text style={styles.registerText}
        >Signup already?
         </Text>

       <Button>
        <Text style={styles.registerLink}
          onPress={() => this.props.navigation.navigate('Welcome')}
        > Login
         </Text>
         </Button>
       </View>

       </View>
     </View>

      </View>

   </TouchableWithoutFeedback>
        );

 }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'sans serif',
    alignContent:'center',
    justifyContent:'center',
    flexDirection:'column',
    alignItems: 'center',
    backgroundColor:'#FECE21' ,




  },
  textHeader:{
   flex:1 ,
   fontFamily: 'sans serif',
   fontSize:20,
   fontWeight: 'normal',
   marginTop: 5,
   color: theme.color.black,
   marginBottom: 10,
   alignItems:'center',
   paddingBottom:10

  },

  inputContainer:{
   flex:1 + 5,
   flexDirection:'column',
   width: Dimensions.get('window').width,
   height: 150,
   backgroundColor: theme.color.offWhite,
   alignItems:'center',
   borderBottomColor:theme.color.orange ,
   borderTopLeftRadius: 10,
   borderTopRightRadius: 10,


  },
  input:{
    borderRadius:15,
    backgroundColor:theme.color.greyLighter,
    width:300,
    marginHorizontal: 20,
    paddingHorizontal:10,
    fontSize: 18,
    fontWeight: 'normal',
    padding: 15,
    marginTop:15,


  },
  btnContainer:{
    flexDirection: 'row',
    width: 150,
    alignItems:'center',
    height: 45,
    color: theme.color.black,
    backgroundColor:'#FECE21' ,
    fontSize: 18,
    fontWeight:'normal',
    borderRadius:15,
    padding: 10,
    marginTop:10,
    marginHorizontal: 20,
    marginBottom: 10

  },
  registerText:{

    color: theme.color.greyDarker,

  },

  registerLink:{
    color:'#FECE21',
    fontWeight:'bold'
  },

   logoContainer:{

       alignContent:'center',
       alignItems: 'center',
       justifyContent:'center',
       marginTop: 30
   },

   logoStyle:{

   width:Dimensions.get('window').width /6,
    height:Dimensions.get('window').height /7,
    backgroundColor: 'transparent',
    paddingHorizontal: 10,

   },
    backGroundStyle: {
     position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.1
   },
   linkContainer:{
  flexDirection:'row',
  alignItems:'center',
   fontSize: 20,
   fontWeight:'400',
   backgroundColor:'transparent'
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
