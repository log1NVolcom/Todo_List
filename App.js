import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FormLabel, Button, Header } from 'react-native-elements';
import Textarea from 'react-native-textarea';

const styles = StyleSheet.create({
  container: {},
  textareaContainer: {
    height: 180,
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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <FormLabel>Your post</FormLabel>
        <Textarea
          containerStyle={styles.textareaContainer}
          style={styles.textarea}
          defaultValue={this.state.text}
          maxLength={120}
          placeholder="好玩有趣的，大家同乐，伤感忧闷的，大家同哭。。。"
          placeholderTextColor="#c7c7c7"
          underlineColorAndroid="transparent"
          onChangeText={text => this.setState({ text })}
        />
        <Button
          title="BUTTON"
          style={{ marginTop: 20 }}
          onPress={() => this.setState({ text: '' })}
        />
      </View>
    );
  }
}
