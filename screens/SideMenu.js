import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import {
  StackNavigator,
  DrawerNavigator,
  NavigationActions,
} from 'react-navigation';
import {
  Button,
  List,
  ListItem,
  Icon,
} from 'react-native-elements';

class SideMenu extends React.Component {

  static navigationOptions() {
    return {
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0,
      },
      headerTintColor: '#808080',
      title: 'Menu',
    };
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={{marginTop: 3}}>
        <StatusBar translucent={false} />
        <View style={styles.menuHeader} >
        </View>
        <List>
          {
            menuList.map((item, i) => (
              <ListItem
                titleStyle={styles.items}
                key={i}
                title={item.title}
                leftIcon={{name: item.icon}}
                onPress={() => {
                  const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: `${item.screen}` })]
                  })
                  this.props.navigation.dispatch(resetAction)
                }}
              />
            ))
          }
        </List>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  menuHeader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    resizeMode: 'contain',
    height: 105,
    marginTop: 15,
  },
  items: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 5,
  },
});

const menuList = [
  {
    title: "Dashboard",
    icon: "network-check",
    screen: "Dashboard",
  },
  {
    title: "Security Cameras",
    icon: "videocam",
    screen: "Security",
  },
  {
    title: "Maintanence",
    icon: "build",
    screen: "Maintanence",
  },
  {
    title: "Tech Support",
    icon: "sms",
    screen: "TechSupport",
  },
]

export { SideMenu };
