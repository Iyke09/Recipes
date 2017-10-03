// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function profile(state = [], action) {
  switch(action.type) {
      case 'ADD_PROFILE' :
          console.log('Incrementing PROFILE succes from the saga!!!');
          console.log('resulttttt ' + action.response.recipe)
          return [...action.response.recipe]
  default:
      return state;
  }
}

export default profile;
