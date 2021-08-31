import styles from './ItemList.module.css';

import TodoItemContainer from '../TodoItem/TodoItemContainer';


const ItemList = props => (
  <ul className={ styles.list }>
    {props.items.map(
      item => (
        <li key={item.id.toString()}>
          <TodoItemContainer { ...item } />
        </li>
      )
    )}
  </ul>
);


export default ItemList;
