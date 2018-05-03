import React from 'react';
import { TextInput } from 'react-native';
import styles from './TextArea.style';

/*
[eslint] 'onChangeText' is missing in props validation (react/prop-types)
onChangeText={props.onChangeText}
value={props.value}
Way to correct this is using : {...props}
*/
const TextArea = props => (
  <TextInput
    style={styles.textInput}
    multiline
    maxLength={120}
    underlineColorAndroid="transparent"
    {...props}
  />
);

export default TextArea;
