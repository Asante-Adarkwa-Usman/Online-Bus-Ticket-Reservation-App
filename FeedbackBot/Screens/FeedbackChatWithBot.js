
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from '../Screens/ConfigFile';

import { theme } from '../Constants/themes';

const BOT_USER = {
  _id: 2,
  name: 'feedbackbot',
  avatar: 'https://as2.ftcdn.net/jpg/00/88/16/09/500_F_88160956_vbXxFNpYicPq2v1Tvpz5o4LtAHEScNYN.jpg'
};





export default class FeedbackChatWithBot extends Component {
  constructor(props){
    super(props);

     Dialogflow_V2.setConfiguration(
 
      "dialogflow-juqgxh@feedbackbot-yama.iam.gserviceaccount.com",
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC2GTaDZGEtn5Hi\nEo5tlDcZa1kFfNt80yzuSSDHOMzLQ7ycubw+TgDPbThaclheSHxOMZXpn/d/YIbz\nlSx7PxKoW8Map6RU1B/7W8HQEl6/IC6oWS8FcSNzChOs/vrdEqA3tFMpKUEsgzWa\nKFvOHR/rVLK0/kjBHP4wOc4U/Kq45rO10AU+nC7yh5Wr4H9wjaAUo5ScPZ4uJX7q\n5aQjiSmoi4Zwd3oRfrujjH3dJ30s2nJOBFG68CFHNAWTAN3pDD1AFRjo0LQWJ3O+\nh0+y/Y2wOK8BmxMIPcRBPwIlRQ1GLEZljXejtvSBreseCC4yPl8jlKoOTQV3K8dk\nLfaP5DE9AgMBAAECggEAAdmON/X6Vb4P+5GwMDVH/QJd6GQdD67Of0ovYs61J+Bz\nh00MuD5PHExR/Ps54hVO6/Vtfi7RkxHuNQXAKq1YmWy7NedbkEAKZiGHvb8eBseD\nKdMkGuRMFaRV0FVTw5Cnn4E9sgaZAqR/lCYSTqz1kMyutw95Ojr66w7/RK/PZSrw\nZ1XVLqp8HqzKuCzI82hkmchcGQ04ruvDraiom3Tm9bgH/qbPXKzyFxrOLkf5VCK5\nYMMwoq0xIJobILeAFbpBH3msGDrf+81fgZklgEc3dMYUNFeB6kNhmd6q03lVcgQ9\nqxVTQ1E8mIZoZeSK/HNjNcK+B3b9vo3bMo3Ll25AeQKBgQDfCDv0tdnddYGSSGgy\nhxVWtzpG7z2XPtl4qlDAjsnKBaRZ4CP7F2BlYd1E2NfplxZd2tqMOgb0mCBItrEi\nCZew5xalvXzB++SZ21v5l4gN7b2TpqkS5XwaczEX06q0l4S28i7mxJ6qQ0GAZNne\nKryD+z9JA55fHpl6a7lMFEO8NQKBgQDRBAGmBS+bWkHxtobEnlrFTtB/y3KGvF32\nhCELJKdfZcQyKk8RlYrEmNICSMspB0caUa7bkbRH9/OjKlJPQIOyzu5F1RvqJtA9\nM/Us/dzY4L/A7ON7Xohrs/7X5zghXh7KEBE9FePubt9rqk2aJlFwlgnmZMAQvzO0\nu1GFk9Dx6QKBgFFxtFM8RP619kbw4fvxkD1GU6Wrn5YngUqrByoJ+m4neUjIrNr4\nQl9DSYXmmZHXdnd3f+9NEVUoaEGlVTHUxuv2tzJ266P61BPLIt8WErzjYCMW7Q7V\ndmhCQF8vEFs6KWCVN8NVcYtDXBwCt/yFJqobiZSkGaUqi2lFBTle/Q0xAoGANZr5\ncULTOtyjHQLa/YI/dWsJPj1HWhblYlvwvZLg+i53awY+0RuxQ0qOUdepgxRCwBVC\n6z0rJ2oIKkioY3sAS9OWeIJ3bk4WChxRPQC+q0C47RnUHcfY5QZ8zZKXardg3iHQ\nygHbO0NkOZCr5mT9bgqM73HXcHQZJrkD52ZJqEECgYA+4iOVUrmI1maf2RWF2cXi\nXjqV7/HJF7qcMm5EwaXfVDjemmBfRwzRh3U6iz5/ran5n2iAV6WQiUh+g3KefK+u\nlI4gJwHi0Pghl1XnwQnz7iIFiqvE3Rl0HojWGM3JUBNbD8vIuFVvjfsDGufjXREe\nArtvqhFD/AbcN1Bt9LPAEw==\n-----END PRIVATE KEY-----\n",
      Dialogflow_V2.LANG_ENGLISH_US,
      "feedbackbot-yama"
    );

     this.state = {
    messages: [
      {
        _id: 1,
        text: `Hi! I am Friendsbot 🤖 from Friendsbuilt trained to take your feedback..\n\nWhat's your name please?`,
        createdAt: new Date(),
        user: BOT_USER
      }
    ]
  };
 


  }
 
 // componentDidMount() {
 //    Dialogflow_V2.setConfiguration(
 
 //      "dialogflow-juqgxh@feedbackbot-yama.iam.gserviceaccount.com",
 //      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC2GTaDZGEtn5Hi\nEo5tlDcZa1kFfNt80yzuSSDHOMzLQ7ycubw+TgDPbThaclheSHxOMZXpn/d/YIbz\nlSx7PxKoW8Map6RU1B/7W8HQEl6/IC6oWS8FcSNzChOs/vrdEqA3tFMpKUEsgzWa\nKFvOHR/rVLK0/kjBHP4wOc4U/Kq45rO10AU+nC7yh5Wr4H9wjaAUo5ScPZ4uJX7q\n5aQjiSmoi4Zwd3oRfrujjH3dJ30s2nJOBFG68CFHNAWTAN3pDD1AFRjo0LQWJ3O+\nh0+y/Y2wOK8BmxMIPcRBPwIlRQ1GLEZljXejtvSBreseCC4yPl8jlKoOTQV3K8dk\nLfaP5DE9AgMBAAECggEAAdmON/X6Vb4P+5GwMDVH/QJd6GQdD67Of0ovYs61J+Bz\nh00MuD5PHExR/Ps54hVO6/Vtfi7RkxHuNQXAKq1YmWy7NedbkEAKZiGHvb8eBseD\nKdMkGuRMFaRV0FVTw5Cnn4E9sgaZAqR/lCYSTqz1kMyutw95Ojr66w7/RK/PZSrw\nZ1XVLqp8HqzKuCzI82hkmchcGQ04ruvDraiom3Tm9bgH/qbPXKzyFxrOLkf5VCK5\nYMMwoq0xIJobILeAFbpBH3msGDrf+81fgZklgEc3dMYUNFeB6kNhmd6q03lVcgQ9\nqxVTQ1E8mIZoZeSK/HNjNcK+B3b9vo3bMo3Ll25AeQKBgQDfCDv0tdnddYGSSGgy\nhxVWtzpG7z2XPtl4qlDAjsnKBaRZ4CP7F2BlYd1E2NfplxZd2tqMOgb0mCBItrEi\nCZew5xalvXzB++SZ21v5l4gN7b2TpqkS5XwaczEX06q0l4S28i7mxJ6qQ0GAZNne\nKryD+z9JA55fHpl6a7lMFEO8NQKBgQDRBAGmBS+bWkHxtobEnlrFTtB/y3KGvF32\nhCELJKdfZcQyKk8RlYrEmNICSMspB0caUa7bkbRH9/OjKlJPQIOyzu5F1RvqJtA9\nM/Us/dzY4L/A7ON7Xohrs/7X5zghXh7KEBE9FePubt9rqk2aJlFwlgnmZMAQvzO0\nu1GFk9Dx6QKBgFFxtFM8RP619kbw4fvxkD1GU6Wrn5YngUqrByoJ+m4neUjIrNr4\nQl9DSYXmmZHXdnd3f+9NEVUoaEGlVTHUxuv2tzJ266P61BPLIt8WErzjYCMW7Q7V\ndmhCQF8vEFs6KWCVN8NVcYtDXBwCt/yFJqobiZSkGaUqi2lFBTle/Q0xAoGANZr5\ncULTOtyjHQLa/YI/dWsJPj1HWhblYlvwvZLg+i53awY+0RuxQ0qOUdepgxRCwBVC\n6z0rJ2oIKkioY3sAS9OWeIJ3bk4WChxRPQC+q0C47RnUHcfY5QZ8zZKXardg3iHQ\nygHbO0NkOZCr5mT9bgqM73HXcHQZJrkD52ZJqEECgYA+4iOVUrmI1maf2RWF2cXi\nXjqV7/HJF7qcMm5EwaXfVDjemmBfRwzRh3U6iz5/ran5n2iAV6WQiUh+g3KefK+u\nlI4gJwHi0Pghl1XnwQnz7iIFiqvE3Rl0HojWGM3JUBNbD8vIuFVvjfsDGufjXREe\nArtvqhFD/AbcN1Bt9LPAEw==\n-----END PRIVATE KEY-----\n",
 //      Dialogflow_V2.LANG_ENGLISH_US,
 //      "feedbackbot-yama"
 //    );
 //  }

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

async handleGoogleResponse(result) {
    let text = await result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
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


