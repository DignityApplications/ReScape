const initialState = {
      allRooms: [],
      currentRoomID: ''
}

const rooms = (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATE_ROOMS_LIST':
        return action.payload.rooms
    case 'UPDATE_CURRENT_ROOM_ID':
        return {currentRoomID: action.payload.roomID}
    default:
        return state
  }
}

export default rooms
