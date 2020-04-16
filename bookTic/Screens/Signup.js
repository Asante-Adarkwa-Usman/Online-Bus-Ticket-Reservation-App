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
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Login from '../Screens/Login';

import auth from '@react-native-firebase/auth';


export default class Signup extends Component {

  constructor(props){
        super(props);
        this.unsuscriber =null;
        this.state={
              isAutenticated:'',
              typedEmail:'',
              typedPassword: '',
              typedConPassword:'',
              user: null,
        }
  }



  render(){

      let btnSignupPressed = ()=>{
           if(this.state.typedEmail =="" && this.state.typedPassword =="" && this.state.typedConPassword =="" ){
             Alert.alert("Inputs Required", "Input fields data required");
           }else if(this.state.typedPassword != this.state.typedConPassword){
             Alert.alert("Password Mismatch", "The password you entered does not match");

           }else if (this.state.typedPassword.lenght < 8 && this.state.typedConPassword.lenght < 8) {
              Alert.alert("password", "password lenght should be at least 8 characters");
           }

           else{

        auth().createUserWithEmailAndPassword(this.state.typedEmail, this.state.typedPassword)
            .then((user) =>{
                this.setState({user: user});
              
                Alert. alert("Account Registeration","signup successful");
                if(Alert){this.props.navigation.navigate('Welcome')}

            }).catch(error => {
                  if (error.code === 'auth/email-already-in-use') {

                    Alert.alert("Signup Error" ,"The email address is already in use!");
                    console.log('The email address is already in use!');
                  }

                  if (error.code === 'auth/invalid-email') {

                    Alert.alert("Signup Error","The email address is invalid!");
                    console.log('The email address is invalid!');
                  }

                  console.error(error);
            });
      }
      }
        return(
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
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


        <View style= { {alignContent:'center',justifyContent:'center',alignItems:'center',marginTop:20} }>

       <TextInput  style={styles.input}

       placeholder="email"
       placeholderTextColor={theme.color.greyDarker}
       keyboardType='email-address'
       autoCorrect={false}
       returnKeyType= 'next'
       clearButtonMode="always"
       onChangeText={
       (text) =>{
         this.setState({typedEmail: text});
        }
      }



       />

       <TextInput  style={styles.input}

       placeholder="password"
       placeholderTextColor={theme.color.greyDarker}
       autoCorrect={false}
       secureTextEntry={true}
       clearButtonMode="always"
       onChangeText={
       (text) =>{
         this.setState({typedPassword: text});
       }
     }

       />

       <TextInput  style={styles.input}

       placeholder="confirm password"
       placeholderTextColor={theme.color.greyDarker}
       autoCorrect={false}
       secureTextEntry={true}
       clearButtonMode="always"
       onChangeText={
       (text) =>{
         this.setState({typedConPassword: text});
        }
      }


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
 </ScrollView>
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
   paddingBottom:15

  },

  inputContainer:{
   flex:1,
   flexDirection:'column',
   width: wp('100'),
   height: hp('70'),
   backgroundColor: theme.color.offWhite,
   alignItems:'center',
   borderTopLeftRadius: 10,
   borderTopRightRadius: 10,


  },
  input:{
    borderRadius:15,
    backgroundColor:theme.color.greyLighter,
    width: wp('80'),
    marginHorizontal: 20,
    paddingHorizontal:10,
    fontSize: 18,
    fontWeight: 'normal',
    padding: 15,
    marginTop:15,


  },
  btnContainer:{
    flexDirection: 'row',
    width: wp('40'),
    alignItems:'center',
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

   width:wp('20'),
    height:hp('16'),
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
