const todosActions = dispatch => ({
  onClickAddItem: value => dispatch({
    type: 'CREATE_ITEM',
    payload: value,
  }),

  setInputvalue: value => dispatch({
    type: 'UPDATE_VALUE',
    payload: value,
  }),

  onClickIsDone: id => dispatch({
    type: 'UPDATE_ITEM',
    payload: id,
  }),

  onClickDelete: id => dispatch({
    type: 'DELETE_ITEM',
    payload: id,
  }),
});


export default todosActions;
