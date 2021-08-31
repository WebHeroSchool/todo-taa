import {
  connect,
} from 'react-redux';

import FilterListItems from './FilterListItems';

import {
  setAllFilter,
} from '../../store/actions/todo/setAllFilter';
import {
  setActiveFilter,
} from '../../store/actions/todo/setActiveFilter';
import {
  setComplitedFilter,
} from '../../store/actions/todo/setComplitedFilter';

const FilterListItemsContainer = props => (
  <FilterListItems {...props} />
);


export default connect(
  null,
  {
    setAllFilter,
    setActiveFilter,
    setComplitedFilter,
  },
)(FilterListItemsContainer);
