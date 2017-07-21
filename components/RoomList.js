import React from 'react';
import { Dimensions, StyleSheet, ListView, Text, Alert } from 'react-native';
import RoomButton from './RoomButton'
import RoomForm from './RoomForm'

export default class RoomList extends React.Component {

  constructor() {
    super()

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    const availableRooms = [{color: 'grey', title: 'Prison Break Escape'}, {color: 'black', title: 'Space Vortex Escape'},
                               {color: 'orange', title: 'Desert Oasis Escape'}, {color: 'brown', title: 'Log Cabin Escape'},
                               {color: 'yellow', title: 'Stranded Island Escape'}, {color: 'green', title: 'Aliean Ship Escape'},
                               {color: 'red', title: 'Santas Shop Escape'}, {color: 'blue', title: 'Frozen Forest Escape'}]
    this.state = {
      backgroundColor: 'white',
      availableRooms,
      dataSource: this.ds.cloneWithRows(availableRooms)
    }
    this.changeColor = this.changeColor.bind(this)
    this.newRoom = this.newRoom.bind(this)
    this.onLearnMore = this.onLearnMore.bind(this)
  }

  changeColor(backgroundColor) {
    this.setState({backgroundColor:backgroundColor})
  }

  newRoom(newColor) {
    roomToAdd = {color: newColor, title: 'New Room'}
    const availableRooms = [ ...this.state.availableRooms, roomToAdd]

    this.setState({
      availableRooms,
      dataSource: this.ds.cloneWithRows(availableRooms)
    })
  }

  onLearnMore(backgroundColor){
    const { navigate } = this.props.navigation;
    navigate('RoomInfo', { backgroundColor: 'red' })
    this.setState({backgroundColor:backgroundColor})
  }

  render() {
    return (
        <ListView style={[styles.container, {backgroundColor: this.state.backgroundColor}]}
          dataSource={this.state.dataSource}
          renderRow={(room) => <RoomButton backgroundColor={room.color} roomName={room.title} onSelect={this.onLearnMore} />}
          renderHeader={() => <Text style={styles.header}>Escape Rooms:</Text>}
          renderFooter={() => <RoomForm onNewRoom={this.newRoom} />}>
        </ListView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  header: {
    fontSize: 50,
    color: '#8b0000',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
