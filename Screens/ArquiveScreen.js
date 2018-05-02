import React from 'react';
import { View, StyleSheet, Text, Button, ScrollView, AsyncStorage } from 'react-native';
import Post from './Post';
import Header from '../src/components/header/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b98e0',
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
      postArray: [],
    };
  }

  displayData = async () => {
    try {
      const aux = await AsyncStorage.getItem('@arquive:Post');
      const auxparse = JSON.parse(aux);
      this.setState({ postArray: auxparse });
      return true;
    } catch (error) {
      return false;
    }
  };

  updateData = async () => {
    try {
      const aux = await AsyncStorage.getItem('@arquive:Post');
      if (aux) {
        const auxparse = JSON.parse(aux);
        this.setState({ postArray: auxparse });
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  };

  deletePost = async (key) => {
    try {
      this.state.postArray.splice(key, 1);
      this.setState({ postArray: this.state.postArray });
      await AsyncStorage.setItem('@arquive:Post', JSON.stringify(this.state.postArray));
      this.updateData();
      return true;
    } catch (exception) {
      return false;
    }
  };

  deleteAllPosts = async () => {
    try {
      const aux = [];
      await AsyncStorage.setItem('@arquive:Post', JSON.stringify(aux));
      this.updateData();
      return true;
    } catch (exeption) {
      return false;
    }
  };

  render() {
    this.displayData();
    const posts = this.state.postArray.map((val, key) => (
      <Post key={key} keyval={key} val={val} deleteMethod={() => this.deletePost(key)} />
    ));

    return (
      <View style={styles.container}>
        <Header />

        <ScrollView style={styles.scrollContainer}>{posts}</ScrollView>
        <View style={styles.footer}>
          <Button
            title="Clear"
            color="#3d4f60" // buttons cant use backgroundColor
            style={styles.button}
            onPress={this.deleteAllPosts}
          />
        </View>
      </View>
    );
  }
}

export default ArquiveScreen;
