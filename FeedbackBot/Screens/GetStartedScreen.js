import React, { Component } from 'react'
import {
       SafeAreaView,
      StyleSheet,
      View,Image,
      Text,
      Dimensions,
     Alert,
} from 'react-native'

import {theme} from '../Constants/themes'
import Button  from 'react-native-button'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import HomeScreen from '../Screens/HomeScreen'


export default class GetStartedScreen extends Component{
     constructor(props){
        super(props);

     }

        render(){


          goHome = () => {
            this.props.navigation.navigate("Home");
           }


		return(
        

           <View  style= {styles.container}>

           <Image
            style={styles.imageStyle}
            source={require('../Constants/Assets/Images/smallCollab.jpg')}
           ></Image>

        <View style={styles.mainContainer}>
           <Text style={styles.welcomeTextStyle}>
             Get to know about the team
             </Text>
             <Text style={{marginTop: 5, fontWeight: '600',  fontSize: 25, color: '#382D07', }}>
              Built with love
               </Text>


               <View style={{backgroundColor: '#AA9400',    fontWeight: '600', position: 'absolute', top: 0, right: 0,marginVertical: 120,marginHorizontal: 20, zIndex: 100, borderRadius: 30}}>
               <Button
                    style={{fontSize: 20,color:'#382D07' , padding: 9}}
                    onPress={  goHome }
                  > Get Started

                   </Button>

                </View>

                  </View>


       </View>





     );
   }

}



const styles = StyleSheet.create({
  container:
   {
    flex: 2 ,
    alignContent:'center',
    justifyContent:'center',
    flexDirection:'column',
    alignItems: 'center',
    backgroundColor: '#FFFFFF' ,
    fontFamily: 'sans serif',


  },

  imageStyle:{
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 70,
    resizeMode: 'contain',
    height: hp('40'),
    
    


  },

  mainContainer:{
     flex:1,
     flexDirection:'column',
    alignItems: 'center',
    backgroundColor: '#e9e9ee',
    width: wp('100'),
    height: hp('20'),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,



  },

  welcomeTextStyle:{
    marginTop: 20,
    fontSize: 25,
    color: '#382D07',
    fontWeight: '600'



  }

 });
