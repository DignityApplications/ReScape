const initialState = {
    user: {
      email: '',
      password: '',
      loggedIn: false
    }
}

export default (state = initialState, action) => {
  switch(action.type) {
    default:
        return state;
  }
}
