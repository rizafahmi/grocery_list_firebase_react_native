import React from 'react'
import {
  View,
  TouchableHighlight,
  Text
} from 'react-native'

export default class GroceryList extends React.Component {
  render() {
    return (
      <TouchableHighlight>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
