import {
  connect,
} from 'react-redux';

import FilterListItems from './FilterListItems';

import {
  setAllFilter,
  setActiveFilter,
  setComplitedFilter,
} from '../../store/actions/todo/setFilters';

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
