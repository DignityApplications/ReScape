import user from './UserReducer'
import rooms from './RoomReducer'
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  user,
  rooms
})

export default rootReducer
