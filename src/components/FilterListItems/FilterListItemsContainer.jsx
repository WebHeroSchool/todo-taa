import {
  connect,
} from 'react-redux';

import FilterListItems from './FilterListItems';

import {
  setAllFilter,
  setActiveFilter,
  setCompletedFilter,
} from '../../store/actions/todo/setFilters';

const FilterListItemsContainer = props => (
  <FilterListItems {...props} />
);


export default connect(
  null,
  {
    setAllFilter,
    setActiveFilter,
    setCompletedFilter,
  },
)(FilterListItemsContainer);
