import React from 'react'
import { TabNavigator, StackNavigator, } from 'react-navigation'
import RoomList from '../components/RoomList'
import RoomInfo from '../components/RoomInfo'
import Store from '../components/Store'
import News from '../components/News'


export const MainMenuTabNac = TabNavigator({
    RoomList: { screen: RoomList },
    Store: { screen: Store },
    News: { screen: News },
  }, {
      tabBarPosition: 'bottom',
      tabBarOptions: {
          labelStyle: {
            fontSize: 20,
          },
          activeTintColor: 'orange',
          inactiveTintColor: 'black',
          style: {
            backgroundColor: '#AEFAFF',
          },
      }
  })
