import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native';

export default class RoomForm extends React.Component {

  constructor() {
    super()
    this.state = {
      txtColor: '',
      roomName: ''
    }


    this.submit = this.submit.bind(this)
  }

  submit() {
    this.props.onNewRoom(this.state.txtColor.toLowerCase());
    this.setState({txtColor: ''})
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.txtInput} placeholder="enter a color..."
          onChangeText={(txtColor) => this.setState({txtColor})} value={this.state.txtColor} />
        <Text style={styles.button} onPress={this.submit}>Add Room</Text>
      </View>
    )
  }

}

RoomForm.propTypes = {
  onNewRoom: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f8ff',
    height: 70,
    paddingTop:20,
    marginBottom: 300,
  },
  txtInput: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: 'snow'
  },
  button: {
    backgroundColor: 'blue',
    margin: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20,
    borderRadius: 5,
  },
});
