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
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



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

            style={styles.mapStyle}
            region={this.state.initialPosition}>

               < Marker
                 coordinate={this.state.markerPosition}
                 title={"Current Location"}
                 >
               </ Marker>

         </MapView>

          <View style={styles.inputContainer}>
          <TextInput  style={styles.input}

          placeholder="search by name of place"
          placeholderTextColor={theme.color.greyDarker}
          keyboardType='email-address'
          autoCorrect={false}
          returnKeyType= 'done'
          clearButtonMode = "always"
          onChangeText = {
          (text) => {
            this.setState({searchPlace: text});
           }
         }



          />

          </View>

    </View>







    );
  }
}

export default AvailableBusStations;


const styles = StyleSheet.create({


    mapStyle:{
    flex:1
  },

  input:{
    borderRadius:15,
    backgroundColor:theme.color.greyDarker,
    width:wp('80'),
    marginHorizontal: 20,
    paddingHorizontal:10,
    marginBottom:10,
    fontSize: 18,
    fontWeight: 'normal',
    padding: 15,
    marginTop: 10,


  },
  inputContainer:{
   alignContent:'center',
   justifyContent:'center',
   alignItems:'center',
   position: 'absolute',
   zIndex: 100,
   top: 30,
   left: 30,



  }
});
