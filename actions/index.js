export const updateUser = (firstName, lastName, email, loggedIn) => {
    return {
      type: 'USER_LOGGEDIN',
      payload: {firstName, lastName, email, loggedIn},
    }
}

export const updateRoomList = (rooms) => {
    return {
      type: 'UPDATE_ROOMS_LIST',
      payload: {rooms},
    }
}

export const updateCurrentRoomID = (roomID) => {
    return {
      type: 'UPDATE_CURRENT_ROOM_ID',
      payload: {roomID},
    }
}

export const updateSceneList = (scenes) => {
    return {
      type: 'UPDATE_SCENES_LIST',
      payload: {scenes},
    }
}
