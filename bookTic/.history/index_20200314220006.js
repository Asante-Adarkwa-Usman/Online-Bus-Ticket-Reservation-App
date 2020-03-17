/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from './Screens/Splash';
import Signup from './Screens/Signup';
import S from './Screens/Splash';

AppRegistry.registerComponent(appName, () => Splash);
