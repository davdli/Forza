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
