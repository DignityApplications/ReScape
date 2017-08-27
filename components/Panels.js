import React from 'react'
import {Text, View, StyleSheet, ListView, TouchableHighlight} from 'react-native'
import { connect } from 'react-redux'
import { updateSceneList, } from '../actions'
import SceneButton from './SceneButton'
var Config = require('../config.js')

class Panels extends React.Component {

  render() {
    const { params } = this.props.navigation.state
    const sceneID = params.sceneID
    const sceneName = params.sceneName

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Panels for Scene: {sceneName}</Text>
        <Text style={styles.text}>Panel ID = {sceneID}</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  text: {
    flex: 1,
    fontSize: 30,
    margin:2,
    color: 'red'
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

export default connect(mapStateToProps)(Panels)
