import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import ArquiveScreen from './Screens/ArquiveScreen';

const styles = StyleSheet.create({
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
});

class App extends Component {
  render() {
    return <MyApp />;
  }
}

const CustomDrawerContentComponent = props => (
  <View>
    <Image style={styles.drawerImage} source={require('./assets/DrawerIcons/todolistlogo.png')} />
  </View>
);

const MyApp = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Arquive: {
      screen: ArquiveScreen,
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: 'CustomDrawerContentComponent',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

export default App;
