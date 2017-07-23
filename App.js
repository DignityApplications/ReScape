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

    var users = this.state.users;
    return this.renderUser(users);

  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading users...</Text>
      </View>
    );
  }

  renderUser(users) {
    const userList = users.map((user) => 
      <View key={user._id}>
        <Text>{user.firstName} {user.lastName}</Text>
        <Text>{user.age} - {user.netWorth}</Text>
      </View>
    );
    return (
      <View style={styles.container}>
        {userList}
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
