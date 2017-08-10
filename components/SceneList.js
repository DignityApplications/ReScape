import React from 'react'
import {Text, View, StyleSheet, ListView, TouchableHighlight} from 'react-native'
import { connect } from 'react-redux'
import { updateSceneList, } from '../actions'
import ColorTools from 'color'
import SceneButton from './SceneButton'
var Config = require('../config.js')

class SceneList extends React.Component {

  constructor() {
    super()
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      dataSource: this.ds.cloneWithRows([])
    }
    this.onLearnMore = this.onLearnMore.bind(this)
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    console.log('http://' + Config.ip + ':3000/scenes?room=' + this.props.rooms.currentRoomID)
    fetch('http://' + Config.ip + ':3000/scenes?room=' + this.props.rooms.currentRoomID) //My local ip address (so the phone can access it)
      .then((response) => response.json())
      .then((scenes) => {
        this.props.dispatch(updateSceneList(scenes))

        this.setState({
          dataSource: this.ds.cloneWithRows(scenes)
        });
      })
      .done();
  }

  onLearnMore(scenID){
    console.log(scenID)
  }

  render() {
    const { params } = this.props.navigation.state
    const backgroundColor = params.backgroundColor
    const color = ColorTools(backgroundColor).negate()


    return (
      <ListView style={[styles.container]}
        key={this.props.scenes._id}
        dataSource={this.state.dataSource}
        renderRow={(scene) => <SceneButton sceneID={scene._id} sceneName={scene.name} storyText={scene.storyText}
        onSelect={this.onLearnMore} />}
        renderHeader={() => <Text style={styles.header}>{`SCENES:`}</Text>}
        enableEmptySections={true}>
      </ListView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  txt: {
    fontSize: 50,
    margin: 10,
  },
  header: {
    fontSize: 50,
    color: '#8b0000',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

const mapStateToProps = state => {
    return { rooms:state.rooms, scenes:state.scenes }
}

export default connect(mapStateToProps)(SceneList)
