import styles from './ItemList.module.css';
import TodoItemContainer from '../TodoItem/TodoItemContainer';
import ErrorMessages from '../ErrorMessages/ErrorMessages';
import withMargin from '../hoc/withMargin/withMargin';
import {
  useState,
} from 'react';


const ItemList = props => {
  const ErrorMessagesWithMargin = props => withMargin(
    ErrorMessages,
    'large',
    props,
  );


  const [
    currentItem,
    setCurrentItem,
  ] = useState(0);

  const handleDragStart = item => {
    setCurrentItem(item);
    console.log(item);
  };
  const handleDragOver = event => {
    event.preventDefault();
  };
  const handleDrop = (event, item) => {
    event.preventDefault();
    console.log(item);
    props.setOrderItems(currentItem, item);
  };


  const list = props.items.filter(item => item.isFilter);

  if (list.length > 0) {
    return (
      <ul className={ styles.list }>
        {list.map(
          item => (
            <li
              className={ styles.listItem }
              key={item.id.toString()}
              draggable={ true }
              onDragStart={ () => handleDragStart(item.order) }
              onDragOver={event => handleDragOver(event)}
              onDrop={event => handleDrop(event, `cover: ${item.order}`)}
            >
              <TodoItemContainer { ...item } />
            </li>
          )
        )}
      </ul>
    );
  } return (
    <>
      <ErrorMessagesWithMargin errorType="empty filter" />
    </>
  );
};

export default ItemList;
