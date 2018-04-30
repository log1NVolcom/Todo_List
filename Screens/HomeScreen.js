import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FormLabel, Button, Header } from 'react-native-elements';
import Textarea from 'react-native-textarea';

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
          placeholder="Enter Text"
          placeholderTextColor="#c7c7c7"
          underlineColorAndroid="transparent"
          onChangeText={text => this.setState({ text })}
        />
        <Button
          title="Clear Text"
          buttonStyle={{
            borderRadius: 10,
            marginTop: 20,
          }}
          onPress={() => this.setState({ text: '' })}
        />
      </View>
    );
  }
}
export default HomeScreen;
