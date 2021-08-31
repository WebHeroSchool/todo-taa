import {
  UPDATE_MY_REPOS_STORE,
} from '../actions/updateStore';
import {
  SET_MY_REPOS_ISLOADING,
} from '../actions/setIsLoading';
import {
  FETCH_MY_REPOS_ERROR,
} from '../actions/fetchError';


const initialState = {
  items: [],
  isLoading: true,
  fetchReposFailure: false,
  errorMessage: '',
};


export const myReposReducer = (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_MY_REPOS_STORE: {
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


  case SET_MY_REPOS_ISLOADING: {
    const newStore = action.payload;

    return {
      ...state,
      isLoading: newStore,
    };

    break;
  }


  case FETCH_MY_REPOS_ERROR: {
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
