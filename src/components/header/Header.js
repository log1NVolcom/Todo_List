import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Header.style';

const imageName = require('../../../assets/DrawerIcons/todo_list_logo.png');

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Todo List</Text>
  </View>
);

export default Header;
