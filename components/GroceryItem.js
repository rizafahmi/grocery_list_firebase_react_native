import React from 'react'
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text
} from 'react-native'

export default class GroceryItem extends React.Component {
  render() {
    const styles = StyleSheet.create({})
    return (
      <TouchableHighlight>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
