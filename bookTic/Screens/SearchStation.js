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

import MapView from 'react-native-maps';


const {width, height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height

const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class SearchStation extends Component {

constructor(props){
  super(props);

  this.state={
    initialPosition:{
       latitude: 0,
       longitude: 0,
       latitudeDelta: 0,
       longitudeDelta: 0,

      }
    }
 }

 watchID: ?number = null

 componentDidMount() {
   navigator.geolocation.getCurrentPosition( (position)=>{
     let lat = parseFloat(position.coords.latitude)
     let long = parseFloat(position.coords.longitude)

     let initialRegion = {
       latitude: lat,
       longitude: long,
       latitudeDelta: LATITUDE_DELTA,
       longitudeDelta:LONGITUDE_DELTA

     }

     this.setState({initialPosition: initialRegion})

   },(error) =>alert(JSON.stringify(error)),
   {enableHighAccuracy: true, timeout: 20000, minimumAge: 1000})

   this.watchID = navigator.geolocation.watchPosition( (position)=>{
     let lat = parseFloat(position.coords.latitude)
     let long = parseFloat(position.coords.longitude)

     let lastRegion = {
       latitude: lat,
       longitude: long,
       latitudeDelta: LATITUDE_DELTA,
       longitudeDelta:LONGITUDE_DELTA

     }

      this.setState({initialPosition: lastRegion})


      })
   )

 }


 componentWillUnmount() {
   navigator.geolocation.clearWatch(this.watchID)
 }

  render() {
    return (




   <View style={{flex:1,fontFamily: 'sans serif'}}>

         <MapView

         style={styles.mapStyle}
         initialRegion={this.state.initialPosition}

 />
     <View>
       <TouchableOpacity
       activeOpacity={0.7}
       onPress={ () => {
        Alert.alert('Search','A button is pressed');
        }
       }
       style={styles.TouchableOpacityStyle}>
       <Image
         style={styles.FloatingButtonStyle}
          source={require('../Constants/Assets/Icons/search.png')}
       />
     </TouchableOpacity>
   </View>

 </View>


    );
  }
}

export default SearchStation;

const styles = StyleSheet.create({

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

mapStyle:{
flex:1
}








});
