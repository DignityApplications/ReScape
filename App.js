import React from 'react';
import { Text, } from 'react-native';
import { RoomListNav } from './config/Router'
import RoomInfo from './components/RoomInfo'
import LoginForm from './components/LoginForm'


export default class App extends React.Component {

  render() {
    return (
      //<RoomListNav />
      <LoginForm />
    );
  }
}
