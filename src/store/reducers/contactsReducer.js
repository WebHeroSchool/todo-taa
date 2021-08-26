import {
  UPDATE_CONTACTS_STORE,
} from '../actions/updateStore';

const initialState = {
  items: [],
};


export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_CONTACTS_STORE: {
    const newContactsList = {
      ...action.payload,
    };

    return {
      ...state,
      items: newContactsList,
    };

    break;
  }


  default:
    return {
      ...state,
    };
  };
};
