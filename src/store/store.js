import { createStore } from 'redux';

const store = createStore(reducer, {
  todo: {
    items: [],
    count: '',
  },
});


export default store;
