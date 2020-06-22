import React, {
  Component
} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Keyboard,
  Text,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  Picker
} from 'react-native';

import {
  theme
} from '../Constants/themes';

import Button from 'react-native-button';
import Icon from 'react-native-vector-icons';
import Ionicons from 'react-native-ionicons';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PlacesInput from 'react-native-places-input';



const {width, height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height

const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


class AvailableBusStations extends Component {

  constructor(props){
    super(props);

    this.state={
      initialPosition:{
         latitude: 0,
         longitude: 0,
         latitudeDelta: 0,
         longitudeDelta: 0,
          searchPlace: ''

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

            style={{flex:1}}
            region={this.state.initialPosition}>

               < Marker
                 coordinate={this.state.markerPosition}
                 title={"Current Location"}
                 >
               </ Marker>

         </MapView>
      </View>

    );
  }
}

export default AvailableBusStations;

const styles = StyleSheet.create({
  searchResult: {
    width: wp(95),
    position: 'absolute',
    margin: 5,
    top: 20,
     left: 5,
     alignItems: 'center',
     justifyContent: 'center',
   },
   chooseContainer: {
     position: 'absolute',
     bottom: 0,
     backgroundColor: theme.color.appColor,
     height: hp(15),
     borderTopLeftRadius: 10,
     borderTopRightRadius: 10,
     alignItems: 'center',
     justifyContent: 'center',

   },

});
