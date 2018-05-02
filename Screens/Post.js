import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  post: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  postText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63',
  },
  postDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  postDeleteText: {
    color: 'white',
  },
});

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View key={this.props.keyval} style={styles.post}>
        <Text style={styles.postText}>{this.props.val.post}</Text>
        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.postDelete}>
          <Text style={styles.postDeleteText}>D</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
