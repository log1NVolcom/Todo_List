import React from 'react';
import { Button } from 'react-native';
import styles from './TDButton.style';

const TDButton = props => (
  <Button title="Create post" color="#3d4f60" style={styles.button} {...props} />
);

export default TDButton;
