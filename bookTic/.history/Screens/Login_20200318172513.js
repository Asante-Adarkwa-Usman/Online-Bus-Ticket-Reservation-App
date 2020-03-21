/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,Image,Keyboard,
  Text,Dimensions,TouchableHighlight,
  StatusBar,TouchableWithoutFeedback,
  TextInput,KeyboardAvoidingView, Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons';
import {theme} from '../Constants/themes';
import Button from 'react-native-button';
import { NavigationContainer } from '@react-navigation/native';



export default class Login extends Component{

  

  render(){
   let _onPress = () =>{
      Alert.alert("login successful");
    }
   

    // for navigation
    // destructing navigation
    const {navigation} = this.props

    
    return(

      <NavigationContainer>{

     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View  style= {styles.container}>
       
        <Text style= {styles.textHeader}>Signin Account</Text>
        
       <View style={ styles.inputContainer }>
        <View style= { {alignContent:'center',justifyContent:'center',alignItems:'center', marginTop:20,marginBottom:20} }>
       <TextInput  style={styles.input}

       placeholder=" email"
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
      <Button style={styles.btnContainer}
       onPress= {_onPress}
       >
       Login

        </Button>
      <Button>
        <Text style={styles.registerText} onPress={()=>{
          navigation.navigate('Signup');
        }} 
        >New here? SignUp
         </Text>
       
       </Button>
       
       </View>
     </View>
       
      </View>
   </TouchableWithoutFeedback> 
  }</NavigationContainer>
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
  //  borderTopLeftRadius:20,
  //  borderTopRightRadius: 20,
   borderRightColor:theme.color.orange,
   borderLeftColor:theme.color.orange,
   

 },
 textHeader:{
  flex:1 / 2,
  fontFamily:'cursive',
  fontSize:27,
  fontWeight: 'bold',
  marginTop: 30,
  color: theme.color.black,
  marginBottom: 40
 },
 inputContainer:{
  flex:1,
   flexDirection:'column',
   marginTop:10,
   width: Dimensions.get('window').width,
   height: 150, 
  backgroundColor: 'white',
  alignItems:'center',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderBottomColor:theme.color.orange 
 },
 input:{
   borderRadius:15,
   backgroundColor:theme.color.greyLighter,
   width:300,
   marginHorizontal: 20,
   paddingHorizontal:10,
   marginBottom:15,
   fontSize: 18,
   fontWeight: 'normal',
   padding: 15,
   marginTop: 10,
   

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

