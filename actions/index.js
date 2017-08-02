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
