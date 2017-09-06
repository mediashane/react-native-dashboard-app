import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat';
import KeyboardSpacer from 'react-native-keyboard-spacer';

class TechSupport extends React.Component {

  state={
    messages: [],
  }

  componentWillMount() {
   this.setState({
     messages: [
       {
         _id: 1,
         text: 'OTG Customer Service, how can we help you?',
         createdAt: new Date(),
         user: {
           _id: 2,
           name: 'React Native',
           avatar: 'http://www.internationalcheckout.com/images/imgs/call37.png',
         },
       },
     ],
   });
 }

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0,
      },
          headerLeft: ( <Icon
            name="menu"
            iconStyle={{marginLeft: 15, marginBottom: 5, color: 'grey'}}
            size={30}
            onPress={() => navigate('DrawerOpen')}
          />
        ),
        headerRight: ( <Icon
          name="local-phone"
          iconStyle={{marginRight: 15, marginBottom: 5, color: 'grey'}}
          size={30}
        />
      )
      };
  };

  onSend(messages = []) {
  this.setState((previousState) => ({
    messages: GiftedChat.append(previousState.messages, messages),
  }));
}

render() {
  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      {Platform.OS === 'android' ? <KeyboardSpacer /> : null }
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { TechSupport };
