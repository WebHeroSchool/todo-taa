import classnames from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types';


const Item = props => (
  <span
    onClick = {() => props.updateItem(props.id)}
    className = {
      classnames({
        [styles.item]: true,
        [styles.done]: props.isDone,
      })
    }
  >
    { props.value }
  </span>
);

Item.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string,
  isDone: PropTypes.bool,
  updateItem: PropTypes.func,
  // deleteItem: PropTypes.func,
};

export default Item;
