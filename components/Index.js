import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { MainMenuTabNac } from '../config/Router'
import RoomInfo from './RoomInfo'
import LoginForm from './LoginForm'

class Index extends React.Component {


  renderInitialView() {
    switch (this.props.user.loggedIn) {
      case true:
          return <MainMenuTabNac />
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
