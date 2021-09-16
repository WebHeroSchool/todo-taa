import classnames from 'classnames';
import styles from './TodoItem.module.css';
import {
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import PropTypes from 'prop-types';

let prevent = false;
let timer;

const onSingleClickHandler = handler => {
  timer = setTimeout(
    () => {
      if (!prevent) {
        handler();
      }
    }, 200);
};

const onDoubleClickHandler = handler => {
  clearTimeout(timer);
  prevent = true;
  handler();
  setTimeout(() => {
    prevent = false;
  }, 200);
};


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
          style={{
            alignSelf: 'flex-start',
          }}
          onClick={ () => onSingleClickHandler(props.onChangeCheckbox) }
          checked={ props.isDone }
          name={ `checked ${props.value.toString()}` }
        />
      }
      label={
        <span
          contentEditable={ props.isEditable }
          suppressContentEditableWarning={ true }
          onDoubleClick={ () => onDoubleClickHandler(props.onEditItem) }
        >
          { props.value }
        </span>
      }
    />
    <Button
      className={ styles.deleteBtn }
      variant="contained"
      color="secondary"
      onClick={ props.onClickButton }
    >
      <DeleteForeverTwoToneIcon fontSize="medium" />
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
