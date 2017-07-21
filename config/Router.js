import React from 'react'
import { TabNavigator, StackNavigator, } from 'react-navigation'
import RoomList from '../components/RoomList'
import RoomInfo from '../components/RoomInfo'

export const RoomListNav = StackNavigator({
  RoomList: { screen: RoomList },
  RoomInfo: { screen: RoomInfo },

})
