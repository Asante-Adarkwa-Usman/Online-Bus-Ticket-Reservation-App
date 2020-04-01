import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,Image,Keyboard,
  Text,Dimensions,TouchableHighlight,TouchableOpacity,
  StatusBar,TouchableWithoutFeedback,
  TextInput,KeyboardAvoidingView, Alert,
} from 'react-native';


import Icon from 'react-native-vector-icons';
import { theme } from '../Constants/themes';
import Button from 'react-native-button';



class SearchStation extends Component {
  render() {
    return (
       <View style={styles.container}>

       <TouchableOpacity
       activeOpacity={0.7}
       onPress={ () => {
         alert('A button is pressed');
        }
       }
       style={styles.TouchableOpacityStyle}>
       <Image
         style={styles.FloatingButtonStyle}
          source={require('../Constants/Assets/Icons/search.png')}
       />
     </TouchableOpacity>














          </View>

    );
  }
}

export default SearchStation;

const styles = StyleSheet.create({
container:{
  flex:1,
  position: 'relative',
  justifyContent: 'center',
  alignContent: 'center',
  fontFamily: 'sans serif',
  alignItems:  'center',
  backgroundColor: theme.color.offWhite
},

searchContainer:{
  flex:1,
  backgroundColor: theme.color.appColor
},
TouchableOpacityStyle: {
  position: 'absolute',
  width: 50,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  right: 30,
  bottom: 30,
},

FloatingButtonStyle: {
  resizeMode: 'contain',
  width: 50,
  height: 50,
  backgroundColor:theme.color.appColor
},









});
