import {
  UPDATE_ABOUT_STORE,
} from '../actions/updateStore';

const initialState = {
  items: [],
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
    };

    break;
  }


  default:
    return {
      ...state,
    };
  };
};
