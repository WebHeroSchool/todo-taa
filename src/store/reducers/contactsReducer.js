import {
  READ_DATA_API,
} from '../actions/readDataApiAction';

const initialState = {};


export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
  case READ_DATA_API: {
    const newContactsList = {
      ...action.payload,
    };

    return {
      ...state,
      ...newContactsList,
    };

    break;
  }


  default:
    return {
      ...state,
    };
  };
};
