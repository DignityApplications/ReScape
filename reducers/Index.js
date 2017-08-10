import user from './UserReducer'
import rooms from './RoomReducer'
import scenes from './SceneReducer'
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  user,
  rooms,
  scenes
})

export default rootReducer
