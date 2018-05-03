import React from 'react';
import { View, StyleSheet, Text, AsyncStorage } from 'react-native';
import Header from '../src/components/header/Header';
import TDButton from '../src/components/button/TDButton';
import TextArea from '../src/components/input/TextArea';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b98e0',
  },
  main: {
    marginLeft: 10,
    marginRight: 10,
    alignContent: 'center',
  },
  textInputLabel: {
    color: '#e8f1f2',
    fontSize: 20,
  },
});

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postArray: [],
      postText: 'Insert your text here',
    };

    this.updateData = this.updateData.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  updateData = async () => {
    try {
      const aux = await AsyncStorage.getItem('@arquive:Post');
      if (aux) {
        const auxparse = JSON.parse(aux);
        this.setState({
          postArray: auxparse,
        });
        return JSON.parse(aux);
      }
    } catch (error) {
      alert('Display Data Error');
    }
    return null;
  };

  saveData = async () => {
    try {
      if (this.state.postText) {
        this.state.postArray.push({
          post: this.state.postText,
        });
        this.setState({
          postArray: this.state.postArray,
        });
        this.setState({
          postText: '',
        });
        await AsyncStorage.setItem('@arquive:Post', JSON.stringify(this.state.postArray));
      }
    } catch (error) {
      alert('Save error');
    }
  };

  render() {
    this.updateData();
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.main}>
          <Text style={styles.textInputLabel}> Create your post here: </Text>

          <TextArea
            onChangeText={postText => this.setState({ postText })}
            value={this.state.postText}
          />

          <TDButton onPress={this.saveData} />
        </View>
      </View>
    );
  }
}
export default HomeScreen;
