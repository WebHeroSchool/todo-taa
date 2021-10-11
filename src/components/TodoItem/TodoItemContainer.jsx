import {
  connect,
} from 'react-redux';
import {
  toggleItem,
} from '../../store/actions/todo/toggleItemAction';
import {
  deleteItem,
} from '../../store/actions/deleteItemAction';
import {
  editItem,
} from '../../store/actions/todo/editItemAction';
import TodoItem from './TodoItem';
import onSingleDoubleClick from '../../utils/onSingleDoubleClick';
import {
  setOrderItems,
} from '../../store/actions/todo/setFilters';


const TodoItemContainer = props => (
  <TodoItem
    { ...props }
    onChangeCheckbox ={ () => props.toggleItem(props.id) }
    onDeleteItem = { () => props.deleteItem(props.id) }
    onEditItem = { props.editItem }
    onSingleDoubleClick = { onSingleDoubleClick }
  />
);

export default connect(
  null, {
    toggleItem,
    deleteItem,
    editItem,
    setOrderItems,
  }
)(TodoItemContainer);
