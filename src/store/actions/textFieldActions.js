const textFieldActions = dispatch => ({
  setInputvalue: value => dispatch({
    type: 'UPDATE_VALUE',
    payload: value,
  }),
});


export default textFieldActions;
