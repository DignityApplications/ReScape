export const updateUser = (firstName, lastName, email, loggedIn) => {
    console.log('hit action')
    return {
      type: 'USER_LOGGEDIN',
      payload: {firstName, lastName, email, loggedIn},
    }
}
