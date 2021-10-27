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
import isNormalLength from '../../utils/isNormalLength';


const TodoItemContainer = props => {
  const editItemWithValidation = (id, value) => {
    if (isNormalLength(value)) {
      return props.editItem(id, value);
    };
  };


  return (
    <TodoItem
      { ...props }
      onChangeCheckbox ={ () => props.toggleItem(props.id) }
      onDeleteItem = { () => props.deleteItem(props.id) }
      onEditItem = { editItemWithValidation }
      onSingleDoubleClick = { onSingleDoubleClick }
    />
  );
};

export default connect(
  state => ({
    isSort: state.todos.isSort,
  }),
  {
    toggleItem,
    deleteItem,
    editItem,
    setOrderItems,
  }
)(TodoItemContainer);
