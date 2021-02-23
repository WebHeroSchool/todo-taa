const initialState = {
  inputValue: '',
};

const textField = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_VALUE': {
    return {
      ...state,
      inputValue: action.payload,
    };
    break;
  }


  default:
    return {
      ...state,
    };
  };
};

export default textField;
