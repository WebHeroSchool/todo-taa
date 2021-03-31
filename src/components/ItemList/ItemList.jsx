import styles from './ItemList.module.css';

import TodoItem from '../TodoItem/TodoItem';


const ItemList = props => {
  console.log(props);
  return (
    <ul className={ styles.list }>
      {props.items.map(
        item => (
          <li key={item.id.toString()}>
            <TodoItem
              {...item}
              updateItem={ props.updateItem }
              deleteItem={ props.deleteItem }
            />
          </li>
        )
      )}
    </ul>
  );
};

export default ItemList;
