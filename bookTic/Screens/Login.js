/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,Image,Keyboard,
  Dimensions,TouchableHighlight,
  StatusBar,TouchableWithoutFeedback,
  KeyboardAvoidingView, Alert,ActivityIndicator
} from 'react-native';

import { Text,TextInput, Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons';
import {theme} from '../Constants/themes';
import Button from 'react-native-button';
import Signup from '../Screens/Signup';
import Location from '../Screens/Location';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




export default class Login extends Component{

  constructor(props){
    super(props);
     this.myTextInput = React.createRef();
    this.state={
      isLoading: false,
      typedEmail:'',
      typedPassword: '',

    }
  }

   render(){

     let _onPressLogin =   () => {

        this.myTextInput.current.clear();
        this.setState({ isLoading: true });
       if(this.state.typedEmail == ""){
          Alert.alert("Inputs Error", "Email field data required");
          this.setState({ isLoading: false });
       }else if( this.state.typedPassword==""){
           Alert.alert("Inputs Error", "Password field data required");
           this.setState({ isLoading: false });
        }


     else{
          Alert.alert("Account","Log in successful");

                 this.setState({ isLoading: false });
                 if(Alert)
                 {
                 this.props.navigation.navigate('location');
                }

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

        <Text style= {styles.textHeader}>Signin Account</Text>

       <View style={ styles.inputContainer }>
               <Image
         style={styles.backGroundStyle}
          source={require('../Constants/Assets/BgPattern.png')}
        ></Image>


        <View style= { {alignContent:'center',justifyContent:'center',alignItems:'center', marginTop:20} }>

       <TextInput
        ref={this.myTextInput}

       style={styles.input}

       placeholder=" Enter Email Here"
       theme={{ colors: { primary: '#FECE21',underlineColor:'transparent',}}}
       mode= "outlined"
       label= "Email"
       value= {this.state.typedEmail}
       placeholderTextColor={theme.color.greyDarker}
       keyboardType='email-address'
       autoCorrect={false}
       returnKeyType= 'next'
       onChangeText={
       (text) =>{
         this.setState({typedEmail: text});
       }
     }

       />

       <TextInput
       ref={this.myTextInput}

       style={styles.input}
       mode= "outlined"
       theme={{ colors: { primary: '#FECE21',underlineColor:'transparent',}}}
       label= "password"
       placeholder="Enter Password Here"
       placeholderTextColor={theme.color.greyDarker}
       autoCorrect={false}
       minLenght={6}
       secureTextEntry={true}
       onChangeText={
       (text) =>{
         this.setState({typedPassword: text});
       }
     }

       />
      <Button
       style={styles.btnContainer}

       onPress= { _onPressLogin }
       >
       Login
     </Button>

     <View>
     <ActivityIndicator animating={this.state.isLoading} size="large"
           color="#FECE21" />
      </View>


    <View style={styles.linkContainer}>
        <Text style={styles.registerText}
        >New here?
         </Text>

       <Button>
        <Text style={styles.registerLink}
          onPress={() => this.props.navigation.navigate('Register')}
        > SignUp
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
   backgroundColor: '#FECE21',



 },
 textHeader:{
  flex:1 / 2,
  fontFamily: 'sans serif',
  fontSize:20,
  fontWeight: 'normal',
  marginTop: 5,
  color: theme.color.black,
  marginBottom: 5,
  alignItems:'center'
 },

 inputContainer:{
  flex:2,
   flexDirection:'column',
   marginTop:20,
   width: wp('100'),
   height: hp('65'),
  backgroundColor: theme.color.offWhite,
  alignItems:'center',
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10

 },
 input:{
   backgroundColor:theme.color.greyLighter,
   width:wp('80'),
   marginHorizontal: 20,
   paddingHorizontal:10,
   marginBottom:7,
   fontSize: 18,
   fontWeight: 'normal',




 },
 btnContainer:{
   flexDirection: 'row',
   width:wp('40'),
   alignItems:'center',
   height: 45,
   color: theme.color.black,
   backgroundColor:'#FECE21' ,
   fontSize: 18,
   fontWeight:'normal',
   borderRadius:15,
   padding: 10,
   marginTop: 10,
   marginHorizontal: 20,
   marginBottom: 10


 },

 registerText:{

   color: theme.color.greyDarker,

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
   registerLink:{
    fontWeight:'bold',
   color: '#FECE21'

 },

 linkContainer:{
  flexDirection:'row',
  alignItems:'center',
   fontSize: 20,
   fontWeight:'400',
   backgroundColor:'transparent'
 }
});
