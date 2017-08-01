import React from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/UserReducer'
import Index from './components/Index'

const store = createStore(reducers)

export default class App extends React.Component {

  render() {
    return (
       <Provider store={store}>
          <Index />
       </Provider>
    )
  }
}
