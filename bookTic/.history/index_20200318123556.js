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

import {signup, login} from './ScreenNames';
 
const App = StackNavigator({

 Login:{
     screen: Login,
     navigationOptions: {
         headerTitle: 'Login',
     },
     },

     Signup:{
        screen: Signup,
        navigationOptions: {
            headerTitle: 'Signup',
        },
        },
    
});
AppRegistry.registerComponent(appName, () => App);
