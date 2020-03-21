/* eslint-disable prettier/prettier */
/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation';

// import App from './App';
import {name as appName} from './app.json';
import Splash from './Screens/Splash';
import Signup from './Screens/Signup';
import Login from './Screens/Login';

 
const App = StackNavigator({

 "login":{
     screen: Login,
     navigationOptions: {
         headerTitle: false
     }
     },

     "signup":{
        screen: Signup,
        navigationOptions: {
            headerTitle: false
        }
        }
    
});
AppRegistry.registerComponent(appName, () => App );
