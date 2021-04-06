import {
  READ_CONTACTS,
} from '../actions/readContactsAction';

const initialState = {};


export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
  case READ_CONTACTS: {
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
