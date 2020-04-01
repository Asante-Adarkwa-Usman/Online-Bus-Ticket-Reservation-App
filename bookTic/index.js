 import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from './Screens/Splash';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import Location from './Screens/Location';
import SearchStation from './Screens/SearchStation';

 class Main extends Component{
 	 constructor(props){

      super(props);

      this.state= {currentScreen: 'Splash'};

      setTimeout(()=> {

        this.setState({ currentScreen: 'Login'});
      }, 1500)

     }



render() {

    //show Splash screen else show the app screen or component
	  const { currentScreen } = this.state
         let mainScreen = currentScreen ==='Splash' ? <Splash /> : <App />
       return mainScreen
}

}



AppRegistry.registerComponent( appName, () => Main);
