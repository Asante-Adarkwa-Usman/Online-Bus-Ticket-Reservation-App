/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,Image,
  Text,Dimensions,TouchableHighlight,
  StatusBar,TouchableWithoutFeedback,
  TextInput,KeyboardAvoidingView, Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {theme} from '../Constants/themes';
import Button from 'react-native-button';

export default class OptionLogin extends Component{
   
    render(){
        return(
            <View  style= {styles.container}>
                   
            <Text style= {styles.textHeader}>Signup Options</Text>
            
            <View style={ styles.inputContainer }>
            <View style={styles.btnContainer}> 
               <Button >
              <Icon 
              name='user-edit'
              size={15}
              color= {theme.color.grey}
              
              />
              
              
              
               Enter Details
             
               </Button>
            </View>   
            </View>

        </View>


           
        );
    }
  

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignContent:'center',
        justifyContent:'center',
        flexDirection:'column',
        alignItems: 'center',
        backgroundColor: '#FECE21',
        borderTopLeftRadius:20,
        borderTopRightRadius: 20,
        borderRightColor:theme.color.orange,
        borderLeftColor:theme.color.orange,
    },
    inputContainer:{
        flex:1,
         flexDirection:'column',
         marginTop:10,
         marginBottom:15,
         width: Dimensions.get('window').width,
         height: 150, 
        backgroundColor: 'white',
        alignItems:'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomColor:theme.color.orange 
       },

       
 textHeader:{
    flex:1 / 2,
    fontFamily:'cursive',
    fontSize:27,
    fontWeight: 'bold',
    marginTop: 30,
    color: theme.color.black,
    marginBottom: 40
   },

   btnContainer:{
    flexDirection: 'row',
    width: 320,
    alignItems:'center',
    justifyContent:'center',
    alignContent: 'center',
    height: 50,
    color: theme.color.black,
    backgroundColor:theme.color.offWhite ,
    fontSize: 18,
    fontWeight:'normal',
    borderRadius:15,
    padding: 15,
    //marginLeft: 30,
    marginBottom: 10,
    marginTop: 20,
    paddingHorizontal: 15
 
  },








});