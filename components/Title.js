import React from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native'


export default class Title extends React.Component {
  render() {
    const styles = StyleSheet.create({})
    return (
      <View>
        <Text style={styles.titleCenter}>{this.props.title}</Text>
      </View>
    )
  }
}
