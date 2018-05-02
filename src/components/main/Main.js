import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styles from './Main.style';

export default class componentName extends Component {
  render() {
    return (
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
    );
  }
}
