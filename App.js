import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
  DrawerNavigator,
} from 'react-navigation';
import { Dashboard, SideMenu, Security, Maintanence, TechSupport } from './screens';

const StackNavs = StackNavigator({
  Dashboard: { screen: Dashboard, },
  SideMenu: { screen: SideMenu, },
  Security: { screen: Security, },
  Maintanence: { screen: Maintanence, },
  TechSupport: { screen: TechSupport, },
});

const DrawerRoutes = ({
  Root: { screen: StackNavs, },
});

const AppDrawer = DrawerNavigator( DrawerRoutes,
  {
    initialRouteName: 'Root',
    contentComponent:({navigation}) =>
    <SideMenu
      navigation={navigation}
      routes={DrawerRoutes}
    />,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppDrawer;
