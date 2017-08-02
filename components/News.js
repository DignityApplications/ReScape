import React from 'react'
import {Text, View, StyleSheet,} from 'react-native'

class News extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Welcome to the news</Text>
        <Text>Update 1</Text>
        <Text>Update 2</Text>
        <Text>Update 3</Text>
      </View>
    )
  }
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

export default News
