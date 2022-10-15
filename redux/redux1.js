// define store, action, action creator and reducer

const ADD = 'ADD';
const addMessage = (message) =>{
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state=[], action) =>{
  switch (action.type){
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);
