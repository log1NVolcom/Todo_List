import React from 'react';
import { View, Text } from 'react-native';
import styles from './Header.style';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Todo List</Text>
  </View>
);

export default Header;
