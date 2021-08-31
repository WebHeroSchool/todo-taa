import {
  connect,
} from 'react-redux';

import FilterListItems from './FilterListItems';

import {
  setActiveFilter,
} from '../../store/actions/todo/setActiveFilter';


const FilterListItemsContainer = props => (
  <FilterListItems {...props} />
);


export default connect(
  null,
  {
    setActiveFilter,
  },
)(FilterListItemsContainer);
