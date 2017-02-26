'use strict';

import React from 'react';
import { StyleSheet, Text, View, TextInput, Animated } from 'react-native';

var Main = React.createClass({
  render() {
    return <View style={styles.container}>
             <View style={styles.tile}>
               <Text style={styles.letter}>B</Text>
             </View>
           </View>;
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#644B62',
  },
  tile: {
    width: 100,
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2',
  },
  letter: {
    color: '#333',
    fontSize: 80,
  },
});

module.exports = Main;
