import {
  connect,
} from 'react-redux';
import updateItem from '../../store/actions/updateItem';
import deleteItem from '../../store/actions/deleteItem';

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
