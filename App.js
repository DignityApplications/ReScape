import React from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/UserReducer'
import { RoomListNav } from './config/Router'
import RoomInfo from './components/RoomInfo'
import LoginForm from './components/LoginForm'

const store = createStore(reducers)

export default class App extends React.Component {

  renderInitialView() {
    switch (store.getState().user.loggedIn) {
      case true:
          return <RoomListNav />
      case false:
          return <LoginForm />
      default:
          return <LoginForm />
    }
  }

  render() {
    return (
       <Provider store={store}>
          {this.renderInitialView()}
       </Provider>
    )
  }
}
