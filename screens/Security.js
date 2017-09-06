import React from 'react';
import { StyleSheet, Text, ScrollView, Platform, Image } from 'react-native';
import { Icon, Card } from 'react-native-elements';

class Security extends React.Component {
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
        title: 'Security',
      };
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Card title='Camera 1'>
          <Image source={require('../images/image840.jpg')} />
        </Card>
        <Card title='Camera 2'>
          <Image source={require('../images/Emergency-Power-Generator-Fence-400x300.jpg')} />
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

export { Security };
