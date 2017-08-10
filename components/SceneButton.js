import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const SceneButton = ({ sceneID, sceneName, storyText, onSelect=f=>f}) => (
<TouchableHighlight onPress={() => onSelect(sceneID)} underlayColor='grey'>
  <View style={styles.row}>
    <Text style={styles.text} >{sceneName}</Text>
    <Text style={styles.storyText} >{storyText}</Text>
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
  text: {
    flex: 1,
    fontSize: 30,
    margin:2,
    color: 'red'
  },
  storyText: {
    flex: 1,
    fontSize: 15,
    fontStyle: 'italic',
    margin:2,
    color: 'green'
  }
});

export default SceneButton
