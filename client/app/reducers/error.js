// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function error(state = [], action) {
    switch(action.type) {
      case 'ERROR' :
        console.log('Incrementing ERROR from the saga!!!');
        console.log(state);
        console.log(action)
        console.log( [...state, action.error] )

        return action.error.message
    case 'RECIPE_SUCCESS' :
        console.log('Incrementing succes from the saga!!!');
        console.log(state);
        console.log(action.response)
        return action.response.message
    default:
        return state;
    }
  }

  export default error;
