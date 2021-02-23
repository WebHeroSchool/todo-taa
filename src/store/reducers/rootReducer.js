import {
  combineReducers,
} from 'redux';

import todos from './todos';
import textField from './textField';

export default combineReducers({
  todos,
  textField,
});
