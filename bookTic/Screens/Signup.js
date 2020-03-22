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
       
        <Text style= {styles.textHeader}>Register</Text>
         
      
        
       <View style={ styles.inputContainer }>
          
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

      
      <TouchableOpacity>
        <Text style={styles.registerText} 
        onPress={ () => this.props.navigation.navigate('Welcome')} 
        >signup already? login
         </Text>
       
       </TouchableOpacity>
       
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
  },

  inputContainer:{
   flex:1 + 2,
    flexDirection:'column',
  
    width: Dimensions.get('window').width,
    height: 150, 
   backgroundColor: 'white',
   alignItems:'center',
   borderBottomColor:theme.color.orange ,
   borderTopLeftRadius: 20,
   borderTopRightRadius: 20,
   

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
    marginLeft: 30,
    marginBottom: 10
 
  },
  registerText:{
    alignItems:'center',
    color: theme.color.greyDarker,
    fontSize: 18,
    fontWeight:'normal',
    backgroundColor:'transparent'
  }
 });
 