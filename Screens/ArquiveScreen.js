import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textareaContainer: {
    height: '70%',
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  textarea: {
    textAlignVertical: 'top', // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
});

class ArquiveScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Text> ARQUIVE SCREEN</Text>
      </View>
    );
  }
}

export default ArquiveScreen;
