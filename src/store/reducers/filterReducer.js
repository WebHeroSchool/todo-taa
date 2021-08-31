import {
  SET_ACTIVE_FILTER,
} from '../actions/todo/setActiveFilter';

const initialState = {
  curentFilter: 'all',
};


export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_ACTIVE_FILTER: {
    if (action.payload === 'active') {
      return {
        ...state,
        curentFilter: action.payload,
      };
    }


    break;
  }


  default:
    return {
      ...state,
    };
  };
};
