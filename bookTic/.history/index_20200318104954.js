/* eslint-disable prettier/prettier */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from './Screens/Splash';
import Signup from './Screens/Signup';
import Login from './Screens/Login';

import {StackNavigator} from 'react-navigation';
import { Signup, Login, Splash} from './Screens/ScreenNames';
const app = StackNavigator({



    
});
AppRegistry.registerComponent(appName, () => app);
