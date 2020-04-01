/* eslint-disable prettier/prettier */
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
import SearchStation from '../Screens/SearchStation';





export default class Location extends Component {
  constructor() {
    super();
    this.state = {
      selectedLabelCurrent: '',
      selectedLabelDestination: ''


    }
  }

  ShowCurrent = (value) => {
    this.setState({
      selectedLabelCurrent: value
    });
  }



  ShowDestination = (text) => {
    this.setState({
      selectedLabelDestination: text
    });
  }



  render() {


    return (


      <
      View style = {
        {
          backgroundColor: theme.color.offWhite,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center'
        }
      } >
      <
      Image style = {
        styles.backGroundStyle
      }
      source = {
        require('../Constants/Assets/BgPattern.png')
      } >
      < /Image>

      <
      View >

      <
      View >

      <
      Text style = {
        styles.textHeader
      } > Where are you currently ? < /Text>

      <Picker style = {
        styles.picker
      }
      onValueChange = {
        this.ShowCurrent
      }
      selectedValue = {
        this.state.selectedLabelCurrent
      } >

      <Picker.Item label = "Select Region"
      value = "Select Region"
      color = "#FECE21" > < /Picker.Item>
      <Picker.Item label = "Greater Accra"
      value = "Accra" > < /Picker.Item>
       <Picker.Item label = "Ashanti Region"
      value = "Kumasi" > < /Picker.Item>
      <Picker.Item label = "Western Region"
      value = "Takoradi" > < /Picker.Item>
      <Picker.Item label = "Volta Region"
      value = "Ho" > < /Picker.Item>
      <Picker.Item label = "Bono Region"
      value = "Sunyani" > < /Picker.Item>
      <Picker.Item label = "Bono East Region"
      value = "Techiman" > < /Picker.Item>
      <Picker.Item label = "Northern Region"
      value = "Tamale" > < /Picker.Item>
      <Picker.Item label = "Eastern Region"
      value = "Koforidua" > < /Picker.Item>
       <Picker.Item label = "Western North Region"
      value = "Wiawso" > < /Picker.Item>
      <Picker.Item label = "Northern Region"
      value = "Tamale" > < /Picker.Item>
      <Picker.Item label = "Central Region"
      value = "Cape Coast" > < /Picker.Item>
      <Picker.Item label = "Oti Region"
      value = "Dambai" > < /Picker.Item>
      <Picker.Item label = "Upper East Region"
      value = "Bolgatanga" > < /Picker.Item>
      <Picker.Item label = "Upper West Region"
      value = "Wa" > < /Picker.Item>
       <Picker.Item label = "Ahafo Region"
      value = "Goaso" > < /Picker.Item>
      <Picker.Item label = "Savannah Region"
      value = "Damongo" > < /Picker.Item>

      </Picker>

      </View>

      <
      Text style = {
        styles.textHeader
      } >
      Where do you want to go ?

        <
        /Text>



        <
        Picker style = {
          styles.picker
        }
      onValueChange = {
        this.ShowDestination
      }
      selectedValue = {
        this.state.selectedLabelDestination
      } >
      <Picker.Item label = "Select Region"
      value = "Select Region"
      color = "#FECE21" > < /Picker.Item>
      <Picker.Item label = "Greater Accra"
      value = "Accra" > < /Picker.Item>
       <Picker.Item label = "Ashanti Region"
      value = "Kumasi" > < /Picker.Item>
      <Picker.Item label = "Western Region"
      value = "Takoradi" > < /Picker.Item>
      <Picker.Item label = "Volta Region"
      value = "Ho" > < /Picker.Item>
      <Picker.Item label = "Bono Region"
      value = "Sunyani" > < /Picker.Item>
      <Picker.Item label = "Bono East Region"
      value = "Techiman" > < /Picker.Item>
      <Picker.Item label = "Northern Region"
      value = "Tamale" > < /Picker.Item>
      <Picker.Item label = "Eastern Region"
      value = "Koforidua" > < /Picker.Item>
       <Picker.Item label = "Western North Region"
      value = "Wiawso" > < /Picker.Item>
      <Picker.Item label = "Northern Region"
      value = "Tamale" > < /Picker.Item>
      <Picker.Item label = "Central Region"
      value = "Cape Coast" > < /Picker.Item>
      <Picker.Item label = "Oti Region"
      value = "Dambai" > < /Picker.Item>
      <Picker.Item label = "Upper East Region"
      value = "Bolgatanga" > < /Picker.Item>
      <Picker.Item label = "Upper West Region"
      value = "Wa" > < /Picker.Item>
       <Picker.Item label = "Ahafo Region"
      value = "Goaso" > < /Picker.Item>
      <Picker.Item label = "Savannah Region"
      value = "Damongo" > < /Picker.Item>




      </Picker>

      <
      View style = {
        styles.btnStyle
      } >
      <
      Button style = {
        styles.btnContainer
      }
      onPress = {
        () => this.props.navigation.navigate('Bus stations')
      } >
      Done < /Button>

      <
      /View>


      <
      /View>


      <
      /View>




    );

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'sans serif',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#FECE21',



  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    color: theme.color.black,
    marginLeft: 10

  },

  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
    width: Dimensions.get('window').width,
    height: 150,
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomColor: theme.color.orange
  },
  picker: {


    flexDirection: 'column',
    color: "black",
    fontSize: 50,
    fontWeight: 'bold',
    borderRadius: 20,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 20


  },
  btnContainer: {
    flexDirection: 'row',
    width: 150,
    alignItems: 'center',
    height: 45,
    color: theme.color.black,
    backgroundColor: '#FECE21',
    fontSize: 18,
    fontWeight: 'normal',
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
    marginLeft: 30,
    marginBottom: 10

  },
  btnStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  backGroundStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.1
  }

});
