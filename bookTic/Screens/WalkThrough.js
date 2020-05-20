import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,Image,Keyboard,
  Text,Dimensions,FlatList,
  StatusBar,TouchableWithoutFeedback,
, Alert,
} from 'react-native';

import {theme} from '../Constants/themes';
import Button from 'react-native-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class WalkThrough extends Component {
  render() {
    return (

     <FlatList
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={true}
      style= {styles.container}
     >






     </FlatList>



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
   height: hp('80'),
 }
});
