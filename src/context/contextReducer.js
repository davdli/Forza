// create reducers
// fired up from calling the addInput function on Form component
// adds input to inputs

const contextReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_INPUT':
      return [action.payload, ...state];
    case 'REMOVE_INPUT':
      return state.filter((input) => input.id !== action.payload);
    default:
      return state;
  };
};

export default contextReducer;
