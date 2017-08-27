import React from 'react'
import {Text, View, StyleSheet, } from 'react-native'

const NavTestingComponent = () => (
  <View style={styles.container}>
    <Text style={styles.text} >This is a Component to test Navigation</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  text: {
    flex: 1,
    fontSize: 30,
    margin:2,
    color: 'blue'
  },

});

export default NavTestingComponent
