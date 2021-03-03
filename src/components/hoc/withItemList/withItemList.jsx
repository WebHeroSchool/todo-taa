import styles from './withItemList.module.css';
import PropTypes from 'prop-types';

const withItemList = Component => ({
  items,
  updateItem,
  deleteItem,
}) => (
  <ul className={ styles.list }>
    {items.map(item => (
      <li key={item.id.toString()}>
        <Component
          id={item.id}
          value={item.value}
          isDone={item.isDone}
          updateItem={updateItem}
          deleteItem={deleteItem}
        />
      </li>)
    )}
  </ul>
);

withItemList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  onClickIsDone: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default withItemList;
