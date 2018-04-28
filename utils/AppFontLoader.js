import React from 'react';
import { AppLoading, Font } from 'expo';
import FontAwesome from '../node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
import MaterialIcons from '../node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf';

const roboto = require('native-base/Fonts/Roboto.ttf');
const robotoMedium = require('native-base/Fonts/Roboto.ttf');
const ionicons = require('native-base/Fonts/Roboto.ttf');

export default class AppFontLoader extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentWillMount() {
    try {
      await Font.loadAsync({
        FontAwesome,
        MaterialIcons,
        Roboto: roboto,
        Roboto_medium: robotoMedium,
        Ionicons: ionicons,
      });
      this.setState({
        fontLoaded: true,
      });
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
