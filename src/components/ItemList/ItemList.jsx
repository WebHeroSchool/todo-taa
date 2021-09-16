import styles from './ItemList.module.css';
import TodoItemContainer from '../TodoItem/TodoItemContainer';
import ErrorMessages from '../ErrorMessages/ErrorMessages';
import withMargin from '../hoc/withMargin/withMargin';


const ItemList = props => {
  const ErrorMessagesWithMargin = props => withMargin(
    ErrorMessages,
    'large',
    props,
  );

  const list = props.items.filter(item => item.isFilter);

  if (list.length > 0) {
    return (
      <ul className={ styles.list }>
        {list.map(
          item => (
            <li className={ styles.listItem } key={item.id.toString()}>
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
