/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import * as firebase from 'firebase'

import ActionButton from './components/ActionButton.js'
import GroceryList from './components/GroceryList.js'
// import Title from './components/Title.js'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAyN8YCIweEzP-gzr-ZGTxeyIsshPa3GB0",
  authDomain: "reactnative-e1ae6.firebaseapp.com",
  databaseURL: "https://reactnative-e1ae6.firebaseio.com",
  storageBucket: "reactnative-e1ae6.appspot.com",
  messagingSenderId: "318927502684"
}
firebase.initializeApp(config)

export default class crud_rn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GroceryList />
        <ActionButton title="Add"/>
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

AppRegistry.registerComponent('crud_rn', () => crud_rn);
