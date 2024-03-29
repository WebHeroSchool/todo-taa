import ErrorMessages from '../ErrorMessages/ErrorMessages';
import withMargin from '../hoc/withMargin/withMargin';
import DndListContainer from '../DndList/DndListContainer';


const ItemList = props => {
  const ErrorMessagesWithMargin = props => withMargin(
    ErrorMessages,
    'large',
    props,
  );

  const list = props.items.filter(item => item.filter);

  if (list.length > 0) {
    return (
      <DndListContainer
        list={ list }
        isDisabled={ props.isSort }
      />
    );
  } return (
    <ErrorMessagesWithMargin errorType="empty filter" />
  );
};

export default ItemList;
