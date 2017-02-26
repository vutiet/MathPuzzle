/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {AppRegistry} from 'react-native';
// import {StyleSheet} from 'react-native';
// import {Text} from 'react-native';
// import {View} from 'react-native';
import React, { Component } from 'react'
// import { AppRegistry, StyleSheet } from 'react-native'
// import { View, Text } from 'react-native'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MathPuzzle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MathPuzzle', () => MathPuzzle);
AppRegistry.registerComponent('MathPuzzle', () => require('./main.js'));
