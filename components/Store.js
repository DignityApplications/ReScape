import React from 'react';
import { Dimensions, StyleSheet, ListView, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { updateRoomList } from '../actions'
import RoomButton from './RoomButton'
import NavTestingComponent from './NavTestingComponent'

class Store extends React.Component {

  constructor() {
    super()
    this.state = {
      backgroundColor: 'white',
    }
    this.onLearnMore = this.onLearnMore.bind(this)
  }

  onLearnMore(backgroundColor){
    const { navigate } = this.props.navigation;
    navigate('NavTestingComponent', { backgroundColor })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Welcome to the store</Text>
        <RoomButton backgroundColor={'red'} roomName={'Red Room'} roomDifficulty={2} onSelect={this.onLearnMore} />
        <RoomButton backgroundColor={'blue'} roomName={'Blue Room'} roomDifficulty={1} onSelect={this.onLearnMore} />
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

export default Store
