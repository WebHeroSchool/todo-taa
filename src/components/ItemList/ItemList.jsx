// import {
//   connect,
// } from 'react-redux';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';

const ItemList = ({
  items,
}) => (
  <ul className={ styles.list }>
    {items.map(item => <li key={item.id.toString()}>
      <Item
        id={item.id}
        value={item.value}
        isDone={item.isDone}
      />
    </li>)}
  </ul>
);

ItemList.propTypes = {
  items: PropTypes.array,
};

export default ItemList;
