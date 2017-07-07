const items = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return [action.name, ...state];
    case 'REMOVE_ITEM':
      return state.filter( (item, i) => i !== action.index );
    default:
      return state;
  }
}

export default items;