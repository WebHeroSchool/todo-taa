const todosActions = dispatch => ({
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
