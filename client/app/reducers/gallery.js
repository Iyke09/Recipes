// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function gallery(state = [], action) {
  switch(action.type) {
      case 'ADD_PHOTO' :
          console.log('Incrementing gallery succes from the saga!!!');
          console.log(state);
          console.log('resulttttt ' + action.response)
          return [...action.response]
  default:
      return state;
  }
}

export default gallery;
