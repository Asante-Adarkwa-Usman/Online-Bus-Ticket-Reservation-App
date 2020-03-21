/* eslint-disable prettier/prettier */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation';

// import App from './App';
import {name as appName} from './app.json';
import Splash from './Screens/Splash';
import Signup from './Screens/Signup';
import Login from './Screens/Login';

import {signup, login} from './Screens/ScreenNames';
 
const App = StackNavigator({

 login:{
     screen: Login,
     navigationOptions: {
         headerTitle: 'login',
     },
     },

     signup:{
        screen: Signup,
        navigationOptions: {
            headerTitle: 'signup',
        },
        },
    
});
AppRegistry.registerComponent(appName, () => App);
