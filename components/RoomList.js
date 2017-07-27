import React from 'react';
import { Dimensions, StyleSheet, ListView, Text, Alert } from 'react-native';
import RoomButton from './RoomButton'
import RoomForm from './RoomForm'

//Import Config.js for IP address
var Config = require('../config.js')

export default class RoomList extends React.Component {

  constructor() {
    super()
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    const availableRooms = [{color: 'grey', name: 'Prison Break Escape'}, {color: 'black', name: 'Space Vortex Escape'},
                               {color: 'orange', name: 'Desert Oasis Escape'}, {color: 'brown', name: 'Log Cabin Escape'},
                               {color: 'yellow', name: 'Stranded Island Escape'}, {color: 'green', name: 'Aliean Ship Escape'},
                               {color: 'red', name: 'Santas Shop Escape'}, {color: 'blue', name: 'Frozen Forest Escape'}]
    this.state = {
      backgroundColor: 'white',
      availableRooms,
      dataSource: this.ds.cloneWithRows([])
    }
    this.changeColor = this.changeColor.bind(this)
    this.newRoom = this.newRoom.bind(this)
    this.onLearnMore = this.onLearnMore.bind(this)
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    console.log('hit')
    fetch('http://' + Config.ip + ':3000/rooms') //My local ip address (so the phone can access it)
      .then((response) => response.json())
      .then((availableRooms) => {
        this.setState({
          availableRooms,
          dataSource: this.ds.cloneWithRows(availableRooms)
        });
      })
      .done();
  }

  changeColor(backgroundColor) {
    this.setState({backgroundColor})
  }

  newRoom(newColor) {
    roomToAdd = {themeColor: newColor, title: 'New Room'}
    const availableRooms = [ ...this.state.availableRooms, roomToAdd]

    this.setState({
      availableRooms,
      dataSource: this.ds.cloneWithRows(availableRooms)
    })
  }

  onLearnMore(backgroundColor){
    const { navigate } = this.props.navigation;
    navigate('RoomInfo', { backgroundColor })
    this.setState({backgroundColor})
  }

  render() {
    return (
        <ListView style={[styles.container, {backgroundColor: this.state.backgroundColor}]}
          key={this.state.availableRooms._id}
          dataSource={this.state.dataSource}         
          renderRow={(room) => <RoomButton backgroundColor={room.themeColor} roomName={room.name} roomDifficulty={room.difficulty}
          onSelect={this.onLearnMore} />}
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
