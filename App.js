import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import ArquiveScreen from './Screens/ArquiveScreen';

const styles = StyleSheet.create({
  drawerImage: {
    marginTop: 25,
    height: 60,
    width: 60,
    display: 'flex',
    alignSelf: 'center',
  },
});

class App extends Component {
  render() {
    return <MyApp />;
  }
}

const CustomDrawerContentComponent = props => (
  <View>
    <Image style={styles.drawerImage} source={require('./assets/DrawerIcons/todo_list_logo.png')} />
    <DrawerItems {...props} />
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
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

export default App;
