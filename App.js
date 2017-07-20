import React from 'react';
import { Dimensions, StyleSheet, Text, View, } from 'react-native';

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      backgroundColor: 'white'
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(backgroundColor) {
    this.setState({backgroundColor:backgroundColor})

  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>
        <Text style={styles.package} onPress={() => this.changeColor('green')}>Aliean Ship Escape</Text>
        <Text style={styles.package} onPress={() => this.changeColor('red')}>Santas Shop Escape</Text>
        <Text style={styles.package} onPress={() => this.changeColor('blue')}>Frozen Forest Escape</Text>
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
  package: {
    backgroundColor: '#fff',
    color: 'green',
    fontSize: 30,
    borderWidth: 2,
    borderRadius: 2,
    padding: 10,
    margin: 20,
    // width: Dimensions.get('window').width - 10,    This is the same thing as below
    alignSelf: 'stretch',
    textAlign: 'center',
  }
});
