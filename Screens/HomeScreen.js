import React from 'react';
import { View, StyleSheet, Text, Button, TextInput, AsyncStorage } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b98e0',
  },
  header: {
    height: 100,
    paddingTop: 24,
    backgroundColor: '#13293d',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'stretch',
    marginBottom: 10,
  },
  headerText: {
    color: '#e8f1f2',
    fontSize: 20,
  },
  main: {
    marginLeft: 10,
    marginRight: 10,
    alignContent: 'center',
  },
  textInput: {
    backgroundColor: '#e8f1f2',
    height: '75%',
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
  logo: {
    paddingTop: 24,
    height: 85,
    width: '100%',
  },
});

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postArray: [],
      postText: '',
    };
  }

  updateData = async () => {
    try {
      const aux = await AsyncStorage.getItem('@arquive:Post');
      if (aux) {
        const auxparse = JSON.parse(aux);
        this.setState({ postArray: auxparse });
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
        this.state.postArray.push({ post: this.state.postText });
        this.setState({ postArray: this.state.postArray });
        this.setState({ postText: '' });
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
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('./../assets/DrawerIcons/todo_list_logo.png')}
          />
        </View>
        <View style={styles.main}>
          <Text style={styles.textInputLabel}>Create your post here:</Text>

          <TextInput
            style={styles.textInput}
            multiline
            maxLength={120}
            underlineColorAndroid="transparent"
            onChangeText={postText => this.setState({ postText })}
            value={this.state.postText}
          />

          <View style={styles.footer}>
            <Button
              title="Create post"
              color="#3d4f60" // buttons cant use backgroundColor
              style={styles.button}
              onPress={this.saveData}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default HomeScreen;
