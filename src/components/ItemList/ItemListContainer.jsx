import {
  connect,
} from 'react-redux';
import {
  updateItem,
} from '../../store/actions/updateItemAction';
import {
  deleteItem,
} from '../../store/actions/deleteItemAction';

import ItemList from './ItemList';


const ItemListContainer = props => (
  <ItemList
    items={ props.items }
    updateItem={ props.updateItem }
    deleteItem={ props.deleteItem }
  />
);


export default connect(
  state => ({
    items: state.todos.items,
  }),
  {
    updateItem,
    deleteItem,
  },
)(ItemListContainer);
