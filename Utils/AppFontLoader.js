import React from 'react';
import { AppLoading, Font } from 'expo';
import FontAwesome from '../node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
import MaterialIcons from '../node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf';

class AppFontLoader extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentWillMount() {
    try {
      await Font.loadAsync({
        FontAwesome,
        MaterialIcons,
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      });
      this.setState({ fontLoaded: true });
    } catch (error) {
      console.log('error loading icon fonts', error);
    }
  }
  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return this.props.children;
  }
}
export { AppFontLoader };