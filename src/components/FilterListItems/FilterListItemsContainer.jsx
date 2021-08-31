import {
  connect,
} from 'react-redux';

import FilterListItems from './FilterListItems';

import {
  setFilter,
} from '../../store/actions/todo/setFilter';


const FilterListItemsContainer = props => (
  <FilterListItems {...props} />
);


export default connect(
  null,
  {
    setFilter,
  },
)(FilterListItemsContainer);
