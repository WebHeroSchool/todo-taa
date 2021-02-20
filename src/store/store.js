import {
  createStore,
} from 'redux';
import initialState from './initialState';

const store = createStore((state = initialState, action) => {
  switch (action.type) {
  case 'DELETE_ITEM': {
    const newItemList = state.items.filter(item => item.id !== action.id);
    return {
      ...state,
      items: newItemList,
    };
    break;
  }


  default:
    return state;
    break;
  };
});


export default store;
