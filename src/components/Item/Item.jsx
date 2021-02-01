import classnames from 'classnames';
import styles from './Item.module.css';

const Item = ({ value, isDone }) => {
  return (<p className = {
    classnames({
      [styles.item]: true,
      [styles.done]: isDone,
    })
  }>
    { value }
  </p>);
}

export default Item;
