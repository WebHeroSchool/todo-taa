import {
  combineReducers,
} from 'redux';

import {
  todosReducer as todos,
} from './todosReducer';

export default combineReducers({
  todos,
});
