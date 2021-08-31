import {
  connect,
} from 'react-redux';

import ItemList from './ItemList';


const ItemListContainer = props => (
  <ItemList
    items={ props.items }
  />
);


export default connect(
  state => ({
    items: state.todos.items,
  })
)(ItemListContainer);
