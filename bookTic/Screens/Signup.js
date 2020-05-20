/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,Image,Keyboard,
  Dimensions,
  StatusBar,TouchableWithoutFeedback,TouchableOpacity,
  KeyboardAvoidingView, Alert,ActivityIndicator
} from 'react-native';

import { Text,TextInput, Provider as PaperProvider } from 'react-native-paper';

import Icon from 'react-native-vector-icons';
import {theme} from '../Constants/themes';
import Button from 'react-native-button';
import { createStackNavigator } from '@react-navigation/stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Login from '../Screens/Login';




export default class Signup extends Component {

  constructor(props){
        super(props);

        this.state = {
              isLoading: false,
              typedEmail:'',
              typedPassword: '',
              typedConPassword:'',

        }
  }


  render(){


     let _onTextChanged =  (text) =>{

           this.setState({typedConPassword: text});

       }

       let onTextChanged =  (text) =>{
          this.setState({typedPassword: text});

        }

      let btnSignupPressed = () => {

                 this.setState({ isLoading: true });

              if( this.state.typedEmail ==""  ){
               Alert.alert("Inputs Error", "Email field data required");
                this.setState({ isLoading: false });
             }else if(this.state.typedPassword ==""  ){
                Alert.alert("Inputs Error", "Password field data required");
                this.setState({ isLoading: false });
              }else if(this.state.typedConPassword =="" ){
                 Alert.alert("Inputs Error", "Password field data required");
                 this.setState({ isLoading: false });
               }

            else if(this.state.typedPassword != this.state.typedConPassword){
              Alert.alert("Password Mismatch Error", " Passwords do not match");
              this.setState({ isLoading: false });

            }

            else {

            
            Alert.alert("Account Registeration","signup successful");
                 this.setState({ isLoading: false });
                  if(Alert){this.props.navigation.navigate('Welcome')}

         }

       }


        return(
          <ScrollView>
            <PaperProvider>
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


        <View style= { {alignContent:'center',justifyContent:'center',alignItems:'center',marginTop:20} }>

       <TextInput  style={styles.input}
       placeholder=" Enter Email Here"
       theme={{ colors: { primary: '#FECE21',underlineColor:'transparent',}}}
       mode= "outlined"
       label= "Email"
       value= {this.state.typedEmail}
       placeholderTextColor={theme.color.greyLighter}
       keyboardType='email-address'
       autoCorrect={false}
       returnKeyType= 'next'
       clearButtonMode="always"
       onChangeText={
       (typedEmail) =>{
         this.setState({typedEmail});
        }
      }



       />

       <TextInput  style={styles.input}

       placeholder=" Enter Password Here"
       theme={{ colors: { primary: '#FECE21',underlineColor:'transparent',}}}
       mode= "outlined"
       label= "Password"
       placeholderTextColor={theme.color.greyLighter}
       autoCorrect={false}
       minLenght={6}
       secureTextEntry={true}
       value={this.state.typedPassword}
       clearButtonMode="always"
       onChangeText={ onTextChanged }

       />

       <TextInput  style={styles.input}

       placeholder=" Enter Password Here"
       theme={{ colors: { primary: '#FECE21',underlineColor:'transparent',}}}
       mode= "outlined"
       label= "Confirm Password"
       placeholderTextColor={theme.color.greyDarker}
       autoCorrect={false}
       minLenght={6}
       secureTextEntry={true}
       value={this.state.typedConPassword}
       clearButtonMode="always"
       onChangeText={ _onTextChanged }


       />

      <Button style={styles.btnContainer}
       onPress= {btnSignupPressed}

       >

       Signup

        </Button>

        <View>
      <ActivityIndicator animating={this.state.isLoading} size="large"
            color="#FECE21" />
       </View>


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
     </PaperProvider>
  </ScrollView>
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
   height: hp('65'),
   backgroundColor: theme.color.offWhite,
   alignItems:'center',
   borderTopLeftRadius: 10,
   borderTopRightRadius: 10,


  },
  input:{
    backgroundColor:theme.color.greyLighter,
    width:wp('80'),
    marginHorizontal: 20,
    paddingHorizontal:10,
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 7
    // padding: 15,


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
