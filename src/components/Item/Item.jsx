import classnames from 'classnames';
import styles from './Item.module.css';

const Item = ({ value, isDone }) => {
  return (<li className = {
    classnames({
      [styles.item]: true,
      [styles.done]: isDone,
    })
  }>
    { value }
  </li>);
}

export default Item;
