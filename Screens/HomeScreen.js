import React from 'react';

import { View, StyleSheet, Text, Button, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b98e0',
  },
  header: {
    height: 80,
    paddingTop: 24,
    backgroundColor: '#13293d',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: '#e8f1f2',
    fontSize: 20,
  },
  main: {
    marginLeft: 10,
    marginRight: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#e8f1f2',
    height: 150,
    marginTop: 0,
    paddingTop: 0,
    textAlignVertical: 'top', // hack android
    marginBottom: 20,
    fontSize: 18,
  },
  textInputLabel: {
    color: '#e8f1f2',
    fontSize: 20,
  },
  button: {
    borderRadius: 10,
    marginTop: 20,
  },
});

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Todo List</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.textInputLabel}>Create your post here:</Text>

          <TextInput
            style={styles.textInput}
            multiline
            maxLength={120}
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />

          <View style={styles.footer}>
            <Button
              title="Create post"
              color="#3d4f60" // buttons cant use backgroundColor
              style={styles.button}
              onPress={() => this.setState({ text: '' })}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default HomeScreen;
