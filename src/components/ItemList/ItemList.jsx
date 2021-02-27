
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';


const ItemList = props => {
  const mapItems = (items, ReturnableComponent) => (
    items.map(
      item => (
        <li key={item.id.toString()}>
          <ReturnableComponent
            id={item.id}
            value={item.value}
            isDone={item.isDone}
            onClickIsDone={props.onClickIsDone}
            onClickDelete={props.onClickDelete}
          />
        </li>
      )
    )
  );

  return (
    <ul className={ styles.list }>
      { mapItems(props.items, Item) }
    </ul>
  );
};


ItemList.propTypes = {
  items: PropTypes.array,
  onClickIsDone: PropTypes.func,
  onClickDelete: PropTypes.func,
};


export default ItemList;
