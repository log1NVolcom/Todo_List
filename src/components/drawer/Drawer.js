import React from 'react';
import { View, Image } from 'react-native';
import { DrawerItems } from 'react-navigation';
import styles from './Drawer.style';

const logo = require('../../../assets/DrawerIcons/todo_list_logo.png');

const Drawer = props => (
  <View>
    <Image style={styles.drawerImage} source={logo} />
    <DrawerItems {...props} />
  </View>
);
export default Drawer;
