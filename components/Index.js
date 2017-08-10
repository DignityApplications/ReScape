import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { RoomListNav } from '../config/Router'
import SceneList from './SceneList'
import LoginForm from './LoginForm'

class Index extends React.Component {

  renderInitialView() {
    switch (this.props.user.loggedIn) {
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
        this.renderInitialView()
    )
  }
}

const mapStateToProps = state => {
    return { user: state.user }
}

export default connect(mapStateToProps)(Index)
