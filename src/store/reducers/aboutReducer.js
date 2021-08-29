import {
  UPDATE_ABOUT_STORE,
} from '../actions/updateStore';
import {
  SET_ABOUT_ISLOADING,
} from '../actions/setIsLoading';
import {
  FETCH_ABOUT_ERROR,
} from '../actions/fetchError';


const initialState = {
  items: [],
  isLoading: true,
  fetchReposFailure: false,
  errorMessage: '',
};


export const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_ABOUT_STORE: {
    const newStore = [
      ...action.payload,
    ];

    return {
      ...state,
      items: [
        ...newStore,
      ],
      fetchReposFailure: false,
    };

    break;
  }


  case SET_ABOUT_ISLOADING: {
    const newStore = action.payload;

    return {
      ...state,
      isLoading: newStore,
    };

    break;
  }


  case FETCH_ABOUT_ERROR: {
    const newStore = action.payload;

    return {
      ...state,
      fetchReposFailure: true,
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
