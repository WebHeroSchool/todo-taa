import {
  UPDATE_CONTACTS_STORE,
} from '../actions/updateStore';
import {
  SET_CONTACTS_ISLOADING,
} from '../actions/setIsLoading';

const initialState = {
  items: [],
  isLoading: true,
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


  case SET_CONTACTS_ISLOADING: {
    const newStore = action.payload;

    return {
      ...state,
      isLoading: newStore,
    };

    break;
  }


  default:
    return {
      ...state,
    };
  };
};
