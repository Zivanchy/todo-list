const todoReducer = (state, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return {
        ...state,
        todos: action.payload.todos,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default todoReducer;
