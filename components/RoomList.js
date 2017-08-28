import React from 'react';
import { Dimensions, StyleSheet, View, Image, ListView, Text, } from 'react-native';
import { connect } from 'react-redux'
import { updateRoomList, updateCurrentRoomID } from '../actions'
import RoomButton from './RoomButton'

//Import Config.js for IP address
var Config = require('../config.js')

class RoomList extends React.Component {

  constructor() {
    super()
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      backgroundColor: 'white',
      dataSource: this.ds.cloneWithRows([])
    }
    this.onLearnMore = this.onLearnMore.bind(this)
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    fetch('http://' + Config.ip + ':3000/rooms') //My local ip address (so the phone can access it)
      .then((response) => response.json())
      .then((rooms) => {

        this.props.dispatch(updateRoomList(rooms))

        this.setState({
          dataSource: this.ds.cloneWithRows(rooms)
        });
      })
      .done();
  }

  onLearnMore(backgroundColor, roomID){
    const { navigate } = this.props.navigation;
    navigate('SceneList', { backgroundColor })
    this.props.dispatch(updateCurrentRoomID(roomID))
  }

  render() {
    return (
      <View style={styles.container}>
      <Image source={require('../images/LevelSelect.png')} style={styles.backgroundImage} />
        <ListView style={[ {backgroundColor: this.state.backgroundColor}]}
          key={this.props.rooms._id}
          dataSource={this.state.dataSource}
          renderRow={(room) => <RoomButton backgroundColor={room.themeColor} roomID={room._id} roomName={room.name} roomDifficulty={room.difficulty}
          onSelect={this.onLearnMore} />}
          renderHeader={() => <Text style={styles.header}>{`${this.props.user.firstName} ${this.props.user.lastName}'s Escape Rooms:`}</Text>}
          enableEmptySections={true}>
        </ListView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
width: null,
height: null,
resizeMode: 'cover'
  },
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

const mapStateToProps = state => {
    return { user: state.user, rooms:state.rooms }
}

export default connect(mapStateToProps)(RoomList)
