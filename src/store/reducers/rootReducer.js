import {
  combineReducers,
} from 'redux';

import {
  myReposReducer as repos,
} from './myReposReducer';
import {
  todosReducer as todos,
} from './todosReducer';
import {
  contactsReducer as contacts,
} from './contactsReducer';


export default combineReducers({
  repos,
  todos,
  contacts,
});
