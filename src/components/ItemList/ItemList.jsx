// import styles from './ItemList.module.css';
// import TodoItemContainer from '../TodoItem/TodoItemContainer';
import ErrorMessages from '../ErrorMessages/ErrorMessages';
import withMargin from '../hoc/withMargin/withMargin';
import DndList from '../DndList/DndList';

// import {
//   useState,
// } from 'react';


const ItemList = props => {
  const ErrorMessagesWithMargin = props => withMargin(
    ErrorMessages,
    'large',
    props,
  );

  // const [
  //   currentItem,
  //   setCurrentItem,
  // ] = useState(0);
  // const [
  //   currentHeight,
  //   setCurrentHeight,
  // ] = useState(0);


  const list = props.items.filter(item => item.filter);

  if (list.length > 0) {
    return (
      <DndList list={ list } />
      /* <ul className={ styles.list } >
        {list.map(
          item => (
            <TodoItemContainer
              key={ item.id.toString() }
              currentItem={ currentItem }
              setCurrentItem={ setCurrentItem }
              currentHeight={ currentHeight }
              setCurrentHeight={ setCurrentHeight }
              { ...item }
            />
          )
        )}
      </ul> */
    );
  } return (
    <>
      <ErrorMessagesWithMargin errorType="empty filter" />
    </>
  );
};

export default ItemList;
