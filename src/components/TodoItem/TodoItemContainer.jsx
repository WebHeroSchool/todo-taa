import {
  connect,
} from 'react-redux';
import {
  updateItem,
} from '../../store/actions/updateItemAction';
import {
  deleteItem,
} from '../../store/actions/deleteItemAction';
import {
  editItem,
} from '../../store/actions/todo/editItemAction';
import TodoItem from './TodoItem';


const TodoItemContainer = props => (
  <TodoItem
    { ...props }
    onChangeCheckbox ={ () => props.updateItem(props.id) }
    onClickButton = { () => props.deleteItem(props.id) }
  />
);

export default connect(
  null,
  {
    updateItem,
    deleteItem,
    editItem,
  },
)(TodoItemContainer);
