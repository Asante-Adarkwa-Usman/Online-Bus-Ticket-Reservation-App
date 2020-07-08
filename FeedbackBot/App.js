import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import GetStartedScreen from './Screens/GetStartedScreen';
import HomeScreen from './Screens/HomeScreen';
import FeedbackChatWithBot from './Screens/FeedbackChatWithBot';
 
  const Stack = createStackNavigator();



  function NavStack() {
   
     return (
    

         

          <Stack.Navigator 
             screenOptions={{
          gestureEnabled: true,    
          headerTitleAlign: 'center',
          headerStyle: {
          backgroundColor: "#F1BB13",
          },
          headerTintColor: '#fff',
         
        }}
            > 
             
             <Stack.Screen  name= "GetStarted" component={ GetStartedScreen } options={{
              headerShown: false ,
               
             }} />
              
             <Stack.Screen  name= "Home" component={ HomeScreen } options={{
              title: "Home",
              headerShown: false ,
              headerStyle: {backgroundColor:"#F1BB13"}
             }} />

              <Stack.Screen  name= "Chat" component={ FeedbackChatWithBot } options={{
              title: "Feedback",
              headerShown: true ,
              headerStyle: {backgroundColor:"#F1BB13"}
             }} />

           
          

          </Stack.Navigator>

                 
 
 
  
      

      );


  }

export default function App() {


   return(

        <NavigationContainer>

           <NavStack />

        </NavigationContainer> 

      
    );

 
}

