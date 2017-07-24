import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements'

const RoomButton = ({backgroundColor, roomName, roomDifficulty, onSelect=f=>f}) => (
<TouchableHighlight onPress={() => onSelect(backgroundColor)} underlayColor='grey'>
  <View style={styles.row}>
    {roomDifficulty >= 1 ? <Icon name='bookmark' color={'red'} /> : null}
    {roomDifficulty >= 2 ? <Icon name='bookmark' color={'red'} /> : null}
    {roomDifficulty >= 3 ? <Icon name='bookmark' color={'red'} /> : null}
    <Icon name='opacity' color={backgroundColor} style={styles.icon}/>
    <Text style={styles.text} >{roomName}</Text>
  </View>
</TouchableHighlight>
)

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    margin: 20,
    padding: 10,
    backgroundColor: '#f0f8ff'
  },
  icon: {
    margin: 5,
  },
  text: {
    fontSize: 25,
    margin:5,
  }
});

export default RoomButton
