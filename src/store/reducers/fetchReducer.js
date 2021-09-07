import {
  REFRESH_FETCH_DATA,
} from '../actions/refreshFetchData';

const initialState = {
  isRefresh: false,
};


export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
  case REFRESH_FETCH_DATA: {
    const newStore = !state.isRefresh;

    return {
      ...state,
      isRefresh: newStore,

    };

    break;
  }


  default:
    return {
      ...state,
    };
  };
};
