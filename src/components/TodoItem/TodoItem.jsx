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
  useState,
  useRef,
} from 'react';
import onSingleDoubleClick from '../../utils/onSingleDoubleClick';


const TodoItem = props => {
  const itemEl = useRef(null);

  const [
    inputValue,
    setInputvalue,
  ] = useState(props.value);

  useEffect(() => {
    document.getElementById(String(props.id)).focus();
  }, [
    props.isEditable,
  ]);


  const onHandleClick = onSingleDoubleClick(
    () => props.onChangeCheckbox(),
    () => props.onEditItem(props.id, inputValue),
  );


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
          ref={ itemEl }
          className={ classnames({
            [styles.itemValue]: true,
            [styles.editError]: props.editError,
          }) }
          id={ props.id }
          key={ props.id }
          contentEditable={ props.isEditable }
          suppressContentEditableWarning={ true }
          onClick={ onHandleClick }
          onInput={ () => {
            setInputvalue(itemEl.current.textContent);
          } }
          onBlur={ () => props.onEditItem(props.id, inputValue) }
        >
          { props.value }
        </span>
      </div>
      <Button
        className={ styles.deleteBtn }
        variant="contained"
        color="secondary"
        onClick={ props.onDeleteItem }
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
  toggleItem: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default TodoItem;
