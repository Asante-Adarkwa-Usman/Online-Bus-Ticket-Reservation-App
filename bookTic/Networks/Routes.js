
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screens/Login';
import 	Signup from '../Screens/Signup';

const Stack = createStackNavigator();

export default function Routes(){

	return(
		   <NavigationContainer> 
          <Stack.Navigator 
            initialRouteName="firstScreen"
            screenOptions= {{ gestureEnabled: false}}
            >
            <Stack.Screen
             name="firstScreen"
             component={Login}
            />
            <Stack.Screen
            name="registerUser"
            component={Signup}
             initialParams={{ user: 'me' }}
            />
          </Stack.Navigator>

      </NavigationContainer> 


		);

}


