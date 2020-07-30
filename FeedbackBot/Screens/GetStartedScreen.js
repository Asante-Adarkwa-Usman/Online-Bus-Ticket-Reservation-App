import React, { Component } from 'react'
import {
       SafeAreaView,
      StyleSheet,
      View,Image,
      Text,ScrollView,
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
        
         <ScrollView>
           <View  style= {styles.container}>

           <Image
            style={styles.imageStyle}
            source={require('../Constants/Assets/Images/team3.jpg')}
           ></Image>

        <View style={styles.mainContainer}>
           <Text style={styles.welcomeTextStyle}>
             Get to know about the team
             </Text>
             <Text style={{marginTop: 5, fontWeight: '600',  fontSize: 25, color: '#382D07', }}>
              Built with love
               </Text>


               <View style={{backgroundColor: '#F1BB13',    fontWeight: '600', position: 'absolute', top: 0, right: 0,marginVertical: 120,marginHorizontal: 20, borderRadius: 30}}>
               <Button
                    style={{fontSize: 20,color:'#ffffff' , padding: 9}}
                    onPress={  goHome }
                  > Get Started

                   </Button>

                </View>

                  </View>


       </View>

     </ScrollView>



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
    backgroundColor: '#F3F3FF' ,
    fontFamily: 'sans serif',


  },

  imageStyle:{
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 70,
    resizeMode: 'center',
    height: hp('40'),

    
    


  },

  mainContainer:{
     flex:1,
     flexDirection:'column',
    alignItems: 'center',
    backgroundColor: '#F4EBCA',
    width: wp('100'),
    height: hp('40'),
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
