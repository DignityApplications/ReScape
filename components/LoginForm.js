import React from 'react';
import {  StyleSheet, Button, Text, View, TextInput, ScrollView, Alert } from 'react-native';

//Import Config.js for IP address
var Config = require('../config.js')

export default class RoomList extends React.Component {

  constructor() {
    super()

    this.state = {
        email: '',
        password: '',
        loggedIn: false,
    }

    this.onPressLogin = this.onPressLogin.bind(this)
    this.onPressLogout = this.onPressLogout.bind(this)
  }

  componentDidMount() { //Get the current login status
    fetch('http://' + Config.ip + ':3000/loggedIn')
        .then((response) => response.json())
        .then((loginResponse) => {
            this.setState({
                loggedIn: loginResponse.loggedIn,
            });
        })
        .done();    
  }

  onPressLogin() {
    fetch('http://' + Config.ip + ':3000/login', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
    })})
    .then((response) => response.json())
    .then((loginResponse) => {
        this.setState({
            loggedIn: loginResponse.loggedIn,
        });
    })
    .done();
  }

  onPressLogout() {
    fetch('http://' + Config.ip + ':3000/logout')
    .then((response) => response.json())
    .then((loginResponse) => {
        this.setState({
            loggedIn: loginResponse.loggedIn,
        });
    })
    .done();
  }

  render() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.header}>RESCAPE</Text>
                <Text style={styles.textLabel}>Email: </Text>
                <TextInput 
                underlineColorAndroid='rgba(0,0,0,0)' 
                style={styles.textInput}
                onChangeText={(email) => this.setState({email})}
                />
                <Text style={styles.textLabel}>Password: </Text>
                <TextInput underlineColorAndroid='rgba(0,0,0,0)' 
                secureTextEntry={true} 
                style={styles.textInput} 
                onChangeText={(password) => this.setState({password})}
                
                />
                <Button
                onPress={this.onPressLogin}
                title="Login"
                color='#5cb85c'
                accessibilityLabel="Login to Rescape"
                />
                <Button
                onPress={this.onPressLogout}
                title="Logout"
                color='#d9534f'
                accessibilityLabel="Logout"
                />
                <Text>Logged in: {String(this.state.loggedIn)}</Text>
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25,
  },
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    //fontFamily: 'Avenir-Black',
    marginBottom: 10,
    color: '#595856'
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
    marginBottom: 30,
    color: '#595856'
  },
  textInput: {
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      fontSize: 20,
      height: 50,
      width: 300,
  },
});
