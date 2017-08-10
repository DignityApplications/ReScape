const initialState = {
      allScenes: []
}

const scenes = (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATE_SCENES_LIST':
        return action.payload.scenes
    default:
        return state
  }
}

export default scenes
