import React from 'react'
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native'
import ColorTools from 'color'

const RoomInfo = ({ navigation }) => {
  const backgroundColor = navigation.state.params.backgroundColor
  console.log(backgroundColor)
  const color = ColorTools(backgroundColor).negate()
  return (
    <TouchableHighlight style={[styles.container, {backgroundColor}]}>
      <Text style={[styles.txt, {color}]}>{backgroundColor}</Text>
    </TouchableHighlight>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 50,
    margin: 10,
  }
});

export default RoomInfo
