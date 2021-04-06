import {
  combineReducers,
} from 'redux';

import {
  todosReducer as todos,
} from './todosReducer';
import {
  contactsReducer as contacts,
} from './contactsReducer';


export default combineReducers({
  todos,
  contacts,
});
