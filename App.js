import React from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/Index'
import Index from './components/Index'

const store = createStore(rootReducer)

export default class App extends React.Component {

  render() {
    return (
       <Provider store={store}>
          <Index />
       </Provider>
    )
  }
}
