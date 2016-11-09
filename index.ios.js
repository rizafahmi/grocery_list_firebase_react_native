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
  TextInput,
  Navigator,
  ListView,
  View
} from 'react-native';

import * as firebase from 'firebase'

import ActionButton from './components/ActionButton.js'
import GroceryItem from './components/GroceryItem.js'
import Title from './components/Title.js'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAyN8YCIweEzP-gzr-ZGTxeyIsshPa3GB0",
  authDomain: "reactnative-e1ae6.firebaseapp.com",
  databaseURL: "https://reactnative-e1ae6.firebaseio.com",
  storageBucket: "reactnative-e1ae6.appspot.com",
  messagingSenderId: "318927502684"
}
const firebaseApp = firebase.initializeApp(config)

export default class crud_rn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      text: ""
    }

    this.itemsRef = this.getRef().child('items')

  }
  getRef() {
    return firebaseApp.database().ref()
  }
  listenForItems(itemsRef) {
    itemsRef.on('value', (fbItems) => {
      let items = []
      fbItems.forEach((item) => {
        items.push({
          title: item.val().title,
          _key: item.key
        })
      })

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      })
    })

  }
  componentDidMount() {
    this.listenForItems(this.itemsRef)
  }
  _renderItem(item) {
    console.log(item)
    return <GroceryItem item={item} />
  }
  _addItem() {
    this.itemsRef.push({title: this.state.text})
    this.setState({
      title: ""
    })
  }
  textChanged() {

  }
  render() {
    return (
      <View style={styles.container}>
        <Title title="Chat app" />
        <ListView dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)} />
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
        <ActionButton title="Add" onPress={this._addItem.bind(this)}/>
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
    paddingTop: 50
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
