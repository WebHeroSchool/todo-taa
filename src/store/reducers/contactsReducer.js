import {
  UPDATE_CONTACTS_STORE,
} from '../actions/updateStore';
import {
  SET_CONTACTS_ISLOADING,
} from '../actions/setIsLoading';
import {
  FETCH_CONTACTS_ERROR,
} from '../actions/fetchError';


const initialState = {
  items: [],
  isLoading: true,
  fetchContactsFailure: false,
  errorMessage: '',
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
      fetchContactsFailure: false,
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


  case FETCH_CONTACTS_ERROR: {
    const newStore = action.payload;

    return {
      ...state,
      fetchContactsFailure: true,
      errorMessage: newStore,
    };

    break;
  }


  default:
    return {
      ...state,
    };
  };
};
