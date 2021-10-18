import {
  connect,
} from 'react-redux';
import {
  sortBy,
  setSort,
} from '../../store/actions/todo/sort';

import Sort from './Sort';


const SortContainer = props => (
  <Sort { ...props } />
);


export default connect(
  state => ({
    itemList: state.todos.items,
    isSort: state.todos.isSort,
  }),
  {
    sortBy,
    setSort,
  },
)(SortContainer);
