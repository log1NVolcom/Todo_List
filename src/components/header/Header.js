import React from 'react';
import { View, Image } from 'react-native';
import styles from './Header.style';

const imageName = require('../../../assets/DrawerIcons/todo_list_logo.png');

const Header = () => (
  <View style={styles.header}>
    <Image style={styles.logo} source={imageName} />
  </View>
);

export default Header;
