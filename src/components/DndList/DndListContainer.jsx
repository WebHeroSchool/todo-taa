import {
  connect,
} from 'react-redux';

import {
  setOrderItems,
} from '../../store/actions/todo/setFilters';

import DndList from './DndList';


const DndListContainer = props => (
  <>
    <DndList { ...props } />
  </>
);


export default connect(
  null,
  {
    setOrderItems,
  },
)(DndListContainer);
