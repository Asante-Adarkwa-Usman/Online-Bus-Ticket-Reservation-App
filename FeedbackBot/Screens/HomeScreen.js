import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Linking,
  View,Image,Keyboard,
  Dimensions,TouchableHighlight,Text,
  StatusBar,TouchableWithoutFeedback,TouchableOpacity,
  KeyboardAvoidingView, Alert,ActivityIndicator,BackHandler
} from 'react-native';

import Button  from 'react-native-button';
import {theme} from '../Constants/themes';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';







export default class HomeScreen extends Component{
	constructor(props){
		super(props);
   


	}



//Exit app when the back button is pressed on the device

  backAction = () => {
    Alert.alert("Warning", "Are you sure you want to exit?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };


  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );

}



        gotoChat = () => {

        this.props.navigation.navigate('Chat');
   	 };


	render(){



		return(



   <View>
      <ScrollView>


        <View style={{ flex: 1, padding: 6, backgroundColor: '#FFFFFF', alignItems:'center'}}>
        <Image
         style={{  marginVertical: 50,marginHorizontal: 100,justifyContent: 'center', alignItems: 'center', alignContent: 'center', width: wp('50'), height: hp('35')}}
         source={require('../Constants/Assets/Images/yellowLogo.jpg')}
        ></Image>
         <Text
         style={{color: '#E2C600', fontSize: 20, fontWeight: 'bold', marginHorizontal: 100,  padding: 5, shadowOpacity: 0.9, shadowColor: '#e9e9ee' }}
         > FriendsBuilt </Text>

        </View>

          <View style={{ borderWidth: 1, borderColor: '#e9e9ee', marginVertical: 5 }}></View>

             <TouchableWithoutFeedback
              onPress={()=> Linking.openURL('https://myportfoliowebsiteaau.imfast.io/')}>
                <Card>

          <Card.Content>
           <Title>Our Services</Title>
           <Paragraph>Get to see what we do at FriendsBuilt</Paragraph>
          </Card.Content>
          <Card.Cover source={require('../Constants/Assets/Images/services.jpg')}/>
          <Card.Actions>
          <View  style={{backgroundColor: '#F1BB13',  borderRadius: 30,  color: 'white', marginVertical: 5 }}>
           <Button
             style={{fontSize: 15, color: '#ffffff', padding: 7, fontWeight: 'bold'}}
            onPress={()=> Linking.openURL('https://myportfoliowebsiteaau.imfast.io/')}
           >Check it out</Button>
           </View>
          </Card.Actions>
          </Card>

        </TouchableWithoutFeedback>

       <TouchableWithoutFeedback
              onPress={()=> Linking.openURL('http://google.com')}>

          <Card>

              <Card.Content>
               <Title>Sample Projects</Title>
               <Paragraph>See projects built by the FriendsBuilt team</Paragraph>
              </Card.Content>
              <Card.Cover source={require('../Constants/Assets/Images/project.jpg')} />
              <Card.Actions>
              <View  style={{backgroundColor: '#F1BB13',  borderRadius: 30, marginVertical: 5  }}>
               <Button
                style={{fontSize: 15, color: '#ffffff', padding: 7, fontWeight: 'bold'}}
                onPress={()=> Linking.openURL('http://google.com')}
               >Check it out</Button>
               </View>
              </Card.Actions>
           </Card>
          </TouchableWithoutFeedback>


      <TouchableWithoutFeedback
              onPress={()=> Linking.openURL('http://google.com')}>

         <Card>

        <Card.Content>
         <Title>Price Plan</Title>
         <Paragraph>Get to build awesome applications with Less Cost</Paragraph>
        </Card.Content>
        <Card.Cover source={require('../Constants/Assets/Images/price.jpg')} />
        <Card.Actions>
        <View  style={{backgroundColor: '#F1BB13',  borderRadius: 30, marginVertical: 5 }}>
         <Button
         style={{fontSize: 15, color: '#ffffff', padding: 7,fontWeight: 'bold'}}
          onPress={()=> Linking.openURL('http://google.com')}
         >Check it out</Button>
         </View>
        </Card.Actions>

        </Card>

       </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
              onPress={()=> Linking.openURL('http://google.com')}>

              <Card>

              <Card.Content>
               <Title>FriendsBuilt Team</Title>
               <Paragraph>Get to know FriendsBuilt team members and what they do</Paragraph>
              </Card.Content>
              <Card.Cover source={require('../Constants/Assets/Images/team.jpg')} />
              <Card.Actions>
              <View  style={{backgroundColor: '#F1BB13',  borderRadius: 30, marginVertical: 5  }}>
               <Button
                style={{fontSize: 15, color: '#ffffff', padding: 7, fontWeight: 'bold'}}
                onPress={()=> Linking.openURL('http://google.com')}
               >Check it out</Button>
               </View>
              </Card.Actions>
            </Card>
          </TouchableWithoutFeedback>


          <TouchableWithoutFeedback
              onPress={()=> Linking.openURL('http://google.com')}>

              <Card>

              <Card.Content>
               <Title>Contact Us</Title>
               <Paragraph>Contact FriendsBuilt Team to handle your Projects</Paragraph>
              </Card.Content>
              <Card.Cover source={require('../Constants/Assets/Images/contact.jpg')} />
              <Card.Actions>
              <View  style={{backgroundColor: '#F1BB13',  borderRadius: 30, marginVertical: 5  }}>
               <Button
                style={{fontSize: 15, color: '#ffffff', padding: 7, fontWeight: 'bold'}}
                onPress={()=> Linking.openURL('http://google.com')}
               >Check it out</Button>
               </View>
              </Card.Actions>
            </Card>
          </TouchableWithoutFeedback>

        </ScrollView>


      <View style={styles.TouchableOpacityStyle}>

       <TouchableOpacity
        activeOpacity={0.5}
        onPress={ () => {
        this.props.navigation.navigate('Chat')
        }}
       >

       <Image
         style={styles.FloatingButtonStyle}
          source={require('../Constants/Assets/Icons/robot.png')}

       />

         </TouchableOpacity>

       </View>

        </View>


	  );
	}
}


const styles = StyleSheet.create({


TouchableOpacityStyle: {
  position: 'absolute',
  zIndex: 10,
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  top:40,
  left:200,
  bottom:30

},

FloatingButtonStyle: {

  resizeMode: "contain",
  marginHorizontal: 40

},
});
