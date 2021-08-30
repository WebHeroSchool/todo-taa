import {
  UPDATE_MYREPOS_STORE,
} from '../actions/updateStore';
import {
  SET_MYREPOS_ISLOADING,
} from '../actions/setIsLoading';
import {
  FETCH_MYREPOS_ERROR,
} from '../actions/fetchError';


const initialState = {
  items: [],
  isLoading: true,
  fetchReposFailure: false,
  errorMessage: '',
};


export const myReposReducer = (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_MYREPOS_STORE: {
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


  case SET_MYREPOS_ISLOADING: {
    const newStore = action.payload;

    return {
      ...state,
      isLoading: newStore,
    };

    break;
  }


  case FETCH_MYREPOS_ERROR: {
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
