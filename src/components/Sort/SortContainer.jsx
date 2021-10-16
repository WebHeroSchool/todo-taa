import {
  connect,
} from 'react-redux';
import {
  sortBy,
} from '../../store/actions/todo/sort';

import Sort from './Sort';


const SortContainer = props => (
  <Sort { ...props } />
);


export default connect(
  state => ({
    itemList: state.todos.items,
  }),
  {
    sortBy,
  },
)(SortContainer);
