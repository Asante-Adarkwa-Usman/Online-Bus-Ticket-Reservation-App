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
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class AvailableBusStations extends Component {

  render() {
    return (
      <ScrollView>
        <View  style= {styles.container}>

                 <Image
             style={styles.backGroundStyle}
              source={require('../Constants/Assets/BgPattern.png')}
            ></Image>


          </View>
       </ScrollView>

    );
  }
}

export default AvailableBusStations;


const styles = StyleSheet.create({

  container: {
    width: Dimensions.get('window').width,
    height: hp('100'),
    fontFamily: 'sans serif',
    alignContent:'center',
    justifyContent:'center',
    flexDirection:'column',
    alignItems: 'center',
    backgroundColor: '#FECE21'
  },

  backGroundStyle: {
   position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity: 0.1
 },
});
