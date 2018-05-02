import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import ArquiveScreen from './Screens/ArquiveScreen';
import Drawer from './src/components/drawer/Drawer';

const App = () => <MyApp />;

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
    contentComponent: Drawer,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

export default App;
