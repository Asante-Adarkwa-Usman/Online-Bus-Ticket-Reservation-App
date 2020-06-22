import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,Image,Keyboard,
  Text,Dimensions,TouchableHighlight,TouchableOpacity,
  StatusBar,TouchableWithoutFeedback,
  TextInput,KeyboardAvoidingView, Alert
} from 'react-native';


import Icon from 'react-native-vector-icons';
import { theme } from '../Constants/themes';
import Button from 'react-native-button';

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import AvailableBusStations from '../Screens/AvailableBusStations';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const {width, height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height

const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class CurrentLocation extends Component {

constructor(props){
  super(props);

  this.state={
    initialPosition:{
       latitude: 0,
       longitude: 0,
       latitudeDelta: 0,
       longitudeDelta: 0,


     },
     markerPosition:{
       latitude: 0,
       longitude: 0
     }

    }
 }

 watchID: ?number = null

 componentDidMount() {

   navigator.geolocation.getCurrentPosition((position)=>{
     var lat = parseFloat(position.coords.latitude)
     var long = parseFloat(position.coords.longitude)

     var initialRegion = {
       latitude: lat,
       longitude: long,
       latitudeDelta: LATITUDE_DELTA,
       longitudeDelta:LONGITUDE_DELTA

     }

     this.setState({initialPosition: initialRegion})
     this.setState({markerPosition: initialRegion})

   },
   (error) => alert(JSON.stringify(error)),

  // {enableHighAccuracy: true, timeout: 40000, minimumAge: 1000},
 );

   this.watchID = navigator.geolocation.watchPosition((position)=>{
     var lat = parseFloat(position.coords.latitude)
     var long = parseFloat(position.coords.longitude)

     var lastRegion = {
       latitude: lat,
       longitude: long,
       latitudeDelta: LATITUDE_DELTA,
       longitudeDelta:LONGITUDE_DELTA

     }

       this.setState({initialPosition: lastRegion})
       this.setState({markerPosition: lastRegion})


      })
 }


 componentWillUnmount() {
   navigator.geolocation.clearWatch(this.watchID)
 }

  render() {
    return (




   <View style={{flex:1,fontFamily: 'sans serif'}}>

         <MapView

         style={styles.mapStyle}
         region={this.state.initialPosition}>

            < Marker
              coordinate={this.state.markerPosition}
              title={"Current Location"}
              >
            </ Marker>

      </MapView>

      <View>
       <TouchableOpacity
       activeOpacity={0.4}
       onPress={ () => {
        this.props.navigation.navigate('bus stations')
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

export default CurrentLocation;

const styles = StyleSheet.create({

searchContainer:{
  flex:1,
  backgroundColor: theme.color.appColor
},

TouchableOpacityStyle: {
  position: 'absolute',
  width: wp(100),
  height: hp(20),
  alignItems: 'center',
  zIndex: 10,
  justifyContent: 'center',
  bottom: 20,

},

FloatingButtonStyle: {
  resizeMode: "contain",
  width: wp(90),
  height: hp(10),
  backgroundColor:theme.color.appColor
},

mapStyle:{
flex:1
}








});
