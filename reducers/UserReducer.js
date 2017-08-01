const initialState = {
    user: {
      firstName: '',
      lastName: '',
      email: '',
      loggedIn: false
    }
}

export default (state = initialState, action) => {
  console.log(state.user)
  switch(action.type) {
    case 'USER_LOGGEDIN':
        console.log(`hit USER_LOGGEDIN. action.payload.firstName === ${action.payload.firstName}`)
        return {
          ...state,
          user: {
            ...state.user,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            email: action.payload.email,
            loggedIn: action.payload.loggedIn,
          }
        }
    default:
        return state
  }
}
