export const addItem = (name) => {
  return(dispatch) => {
    axios.post('/api/items', { item : { name } })
      .then( res => dispatch({ type: 'ADD_ITEM', name: res.data }) )
  }
  // return { type: 'ADD_ITEM', name }
}

export const removeItem = (index) => {
  return { type: 'DELETE_ITEM', index }
}