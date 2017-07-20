import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>Welcome to Rescape!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  intro: {
    backgroundColor: 'red',
    color: '#000',
    fontSize: 70,
    textAlign: 'center',
  }
});
