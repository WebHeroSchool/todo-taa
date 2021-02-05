import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({
  items,
  onClickIsDone,
}) => (<ul className={ styles.list }>
  {items.map(item => <li key={ item.value.toString() }>
    <Item
      value={ item.value }
      isDone={ item.isDone }
      onClickIsDone={ onClickIsDone }
    />
  </li>)}
</ul>
);

export default ItemList;
