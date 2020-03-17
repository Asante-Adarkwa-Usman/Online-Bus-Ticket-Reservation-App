/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from './Screens/Splash';
import Signup from './Screens/Signup';
import OptionLogin from './Screens/ OptionLogin';
import Login from './Screens/Login';

AppRegistry.registerComponent(appName, () => Login);
