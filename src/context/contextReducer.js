// create reducers
// fired up from calling the addInput function on Form component
// adds input to inputs

const contextReducer = (state, action) => {
  let inputs;
  switch (action.type) {
    case 'ADD_INPUT':
      inputs = [action.payload, ...state];
      localStorage.setItem('inputs', JSON.stringify(inputs)); //store inputs in local storage
      return inputs;
    case 'REMOVE_INPUT':
      inputs = state.filter((input) => input.id !== action.payload);
      localStorage.setItem('inputs', JSON.stringify(inputs));
      return inputs;
    default:
      return state;
  };
};

export default contextReducer;
