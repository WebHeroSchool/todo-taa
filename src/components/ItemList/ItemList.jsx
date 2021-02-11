import Item from '../Item/Item';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';

const ItemList = ({
  items,
  onClickIsDone,
  onClickDelete,
}) => (<ul className={ styles.list }>
  {items.map(item => <li key={item.id.toString()}>
    <Item
      id={item.id}
      value={item.value}
      isDone={item.isDone}
      onClickIsDone={onClickIsDone}
      onClickDelete={onClickDelete}
    />
  </li>)}
</ul>
);

Item.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  onClickIsDone: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default ItemList;
