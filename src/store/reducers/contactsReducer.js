import {
  UPDATE_CONTACTS_STORE,
} from '../actions/updateStore';
import {
  SET_CONTACTS_ISLOADING,
} from '../actions/repos/setIsLoading';
import {
  FETCH_CONTACTS_ERROR,
} from '../actions/fetchError';


const initialState = {
  items: [],
  isLoading: true,
  fetchContactsFailure: false,
  errorType: '',
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
      errorType: '',
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
    const newErrorType = action.payload.type;
    const newErrorMessage = action.payload.message;


    return {
      ...state,
      fetchContactsFailure: true,
      errorType: newErrorType,
      errorMessage: newErrorMessage,
    };

    break;
  }


  default:
    return {
      ...state,
    };
  };
};
