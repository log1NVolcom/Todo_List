import React from 'react';
import { View, StyleSheet, Text, Button, TextInput, AsyncStorage } from 'react-native';

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
    height: '70%',
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

class ArquiveScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  displayData = async () => {
    try {
      const value = await AsyncStorage.getItem('@arquive:Post');
      this.setState({ text: value });
    } catch (error) {
      alert('Display Data Error');
    }
  };

  render() {
    this.displayData();
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Todo List</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.textInputLabel}>{this.state.text}</Text>

          <View style={styles.footer}>
            <Button
              title="Clear"
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

export default ArquiveScreen;
