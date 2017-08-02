const initialState = {
      allRooms: []
}

const rooms = (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATE_ROOMS_LIST':
        return action.payload.rooms
    default:
        return state
  }
}

export default rooms
