import {
  combineReducers,
} from 'redux';

import {
  aboutReducer as about,
} from './aboutReducer';
import {
  todosReducer as todos,
} from './todosReducer';
import {
  contactsReducer as contacts,
} from './contactsReducer';


export default combineReducers({
  about,
  todos,
  contacts,
});
