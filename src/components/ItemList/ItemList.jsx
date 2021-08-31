import styles from './ItemList.module.css';

import TodoItemContainer from '../TodoItem/TodoItemContainer';


const ItemList = props => (
  <ul className={ styles.list }>
    {props.items.filter(item => item.isFilter).map(
      item => (
        <li key={item.id.toString()}>
          <TodoItemContainer { ...item } />
        </li>
      )
    )}
  </ul>
);


export default ItemList;
