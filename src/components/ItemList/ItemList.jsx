import ErrorMessages from '../ErrorMessages/ErrorMessages';
import withMargin from '../hoc/withMargin/withMargin';
import DndList from '../DndList/DndList';


const ItemList = props => {
  const ErrorMessagesWithMargin = props => withMargin(
    ErrorMessages,
    'large',
    props,
  );

  const list = props.items.filter(item => item.filter);

  if (list.length > 0) {
    return (
      <DndList list={ list } />
    );
  } return (
    <ErrorMessagesWithMargin errorType="empty filter" />
  );
};

export default ItemList;
