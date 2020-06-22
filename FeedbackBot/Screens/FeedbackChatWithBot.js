
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {theme} from '../Constants/themes'

import { Dialogflow_V2 } from 'react-native-dialogflow';

import { dialogflowConfig } from '../Screens/ConfigFile';


const BOT_USER = {
  _id: 2,
  name: 'FAQ Bot',
  avatar: 'https://i.imgur.com/7k12EPD.png'
};





class FeedbackChatWithBot extends Component {
  state = {
    messages: [
      {
        _id: 1,
        text: `Hi! I am Friendsbot 🤖 from Friendsbuilt trained to take your feedback..\n\nWhat's your name please?`,
        createdAt: new Date(),
        user: BOT_USER
      }
    ]
  };
 //
 // componentDidMount() {
 //    Dialogflow_V2.setConfiguration(
 //
 //      // dialogflowConfig.client_email,
 //      // dialogflowConfig.private_key,
 //      Dialogflow_V2.LANG_ENGLISH_US,
 //      dialogflowConfig.project_id
 //    );
 //  }





  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));

    let message = messages[0].text;
    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    );
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: theme.color.appColor}}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
      </View>
    );
  }
}

export default FeedbackChatWithBot
