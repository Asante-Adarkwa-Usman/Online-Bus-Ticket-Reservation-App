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




export default class ChooseOptionButtons extends Component {

  render(){

        return(

          <ScrollView>

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

         </TouchableWithoutFeedback>

       </ScrollView>
        );

 }

}
