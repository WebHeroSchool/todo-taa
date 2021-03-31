import {
  connect,
} from 'react-redux';
// import createItem from '../../store/actions/createItem';
import updateItem from '../../store/actions/updateItem';
import deleteItem from '../../store/actions/deleteItem';

import Todo from './Todo';


const TodoContainer = props => (
  <Todo
    items={ props.items }
    count={ props.count }
    createItem={ props.createItem }
    updateItem={ props.updateItem }
    deleteItem={ props.deleteItem }
  />
);


export default connect(
  state => ({
    items: state.todos.items,
    count: state.todos.count,
  }),
  {
    // createItem,
    updateItem,
    deleteItem,
  },
)(TodoContainer);
