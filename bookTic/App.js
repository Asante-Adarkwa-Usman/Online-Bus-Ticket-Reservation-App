
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import Splash from './Screens/Splash';
import Location from './Screens/Location';
import SearchStation from './Screens/SearchStation';



const Stack = createStackNavigator();


export default class App extends Component{

	render(){

	return(

         <NavigationContainer>

          <Stack.Navigator>

             <Stack.Screen  name= "Welcome" component={Login}   options={{ headerShown: false }} />
            <Stack.Screen  name= "Register" component={Signup}  options={{ headerShown: false }} />
            <Stack.Screen  name= "location" component={Location} options={{
            	headerShown: true ,
            	headerStyle: {backgroundColor:"#FECE21"}
             }} />
             <Stack.Screen  name= "Bus stations" component={SearchStation}
						   options={{
            	 headerShown: true,
            	 headerStyle: {backgroundColor:"#FECE21"}
             }} />
						 


          </Stack.Navigator>

      </NavigationContainer>


		);
  }

}
