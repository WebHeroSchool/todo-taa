import classnames from 'classnames';
import styles from './TodoItem.module.css';
import {
  Button,
  Checkbox,
} from '@material-ui/core';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import PropTypes from 'prop-types';
import {
  useEffect,
} from 'react';


const TodoItem = props => {
  useEffect(() => {
    document.getElementById(String(props.id)).focus();
  }, [
    props.isEditable,
  ]);

  const onClick = () => {
    let time;
    let timerId;
    const delay = 200;

    return function () {
      if (!time) {
        time = Date.now();
        timerId = setTimeout(() => {
          onSingleClickHandler();
          time = null;
        }, delay);
      } else if (time) {
        if ((Date.now() - time) < delay) {
          clearTimeout(timerId);
          onDoubleClickHandler();
        };
        time = null;
      }
    };
  };

  const onHandleClick = onClick();

  const onSingleClickHandler = () => props.onChangeCheckbox();
  const onDoubleClickHandler = () => props.onEditItem();

  return (
    <span className = {
      classnames({
        [styles.item]: true,
        [styles.done]: props.isDone,
      })
    }>
      <Checkbox
        style={{
          alignSelf: 'flex-start',
        }}
        checked={ props.isDone }
        name={ `checked ${props.value.toString()}` }
        onChange={ props.onChangeCheckbox }
      />
      <div className={ styles.itemValueWrapper }>
        <span
          className={ classnames({
            [styles.itemValue]: true,
            [styles.editError]: props.editError,
          }) }
          id={ props.id }
          contentEditable={ props.isEditable }
          suppressContentEditableWarning={ true }
          onClick={ onHandleClick }
          onBlur={ event => {
            props.onUpdateItemValue(props.id, event.target.innerText, true);
          }
          }
        >
          { props.value }
        </span>
      </div>
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
};


TodoItem.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string,
  isDone: PropTypes.bool,
  updateItem: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default TodoItem;
