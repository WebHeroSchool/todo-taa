import classnames from 'classnames';
import styles from './TodoItem.module.css';
import {
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import PropTypes from 'prop-types';


const TodoItem = props => (
  <span className = {
    classnames({
      [styles.item]: true,
      [styles.done]: props.isDone,
    })
  }>
    <FormControlLabel
      control={
        <Checkbox
          onChange={() => props.updateItem(props.id)}
          checked={props.isDone}
          name={`checked ${props.value.toString()}`}
        />
      }
      label={ props.value }
    />
    <Button
      className={styles.deleteBtn}
      variant="contained"
      color="secondary"
      onClick={() => props.deleteItem(props.id)}
    >
      <DeleteForeverTwoToneIcon fontSize="default" />
    </Button>
  </span>
);

TodoItem.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string,
  isDone: PropTypes.bool,
  updateItem: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default TodoItem;
