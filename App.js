import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    fetch('http://192.168.1.132:3000') //My local ip address (so the phone can access it)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          users: responseData,
        });
      })
      .done();
  }
  render() {
    if (this.state.users.length == 0) {
      return this.renderLoadingView();
    }

    var user = this.state.users[0];
    return this.renderUser(user);

  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading users...</Text>
      </View>
    );
  }

  renderUser(user) {
    return (
      <View style={styles.container}>
        <Text>{user.firstName} {user.lastName}</Text>
        <Text>{user.age} - {user.netWorth}</Text>
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
});
