import {
  connect,
} from 'react-redux';
import {
  filterBy,
} from '../../store/actions/todo/setFilters';

import Filters from './Filters';


const FiltersContainer = props => (
  <Filters { ...props } />
);


export default connect(
  null,
  {
    filterBy,
  },
)(FiltersContainer);
