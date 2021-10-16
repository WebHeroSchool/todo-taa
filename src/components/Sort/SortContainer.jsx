import {
  connect,
} from 'react-redux';
import {
  filterBy,
} from '../../store/actions/todo/setFilters';

import Sort from './Sort';


const SortContainer = props => (
  <Sort { ...props } />
);


export default connect(
  state => ({
    itemList: state.todos.items,
  }),
  {
    filterBy,
  },
)(SortContainer);
