import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import GetStartedScreen from './Screens/GetStartedScreen';
import HomeScreen from './Screens/HomeScreen';
import CheckInternetConnection from './Screens/CheckInternetConnection';
import FeedbackChatWithBot from './Screens/FeedbackChatWithBot';


 


AppRegistry.registerComponent(appName, () => App);
