import classNames from 'classnames';
import styles from './TodoItem.module.css';
import {
  Button,
  Checkbox,
} from '@material-ui/core';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import {
  useEffect,
  useState,
  useRef,
} from 'react';


const TodoItem = props => {
  const itemEl = useRef(null);

  const [
    inputValue,
    setInputvalue,
  ] = useState(props.value);

  useEffect(() => {
    itemEl.current.focus();
  }, [
    props.isEditable,
  ]);

  const [
    isDrag,
    setIsDrag,
  ] = useState(false);


  const handleDragStart = () => {
    props.setCurrentItem(props.order);
  };
  const handleDragEnd = () => {
    setIsDrag(false);
  };
  const handleDragLeave = () => {
    setIsDrag(false);
  };
  const handleDragOver = () => {
    event.preventDefault();
    setIsDrag(true);
  };
  const handleDrop = () => {
    props.setOrderItems(props.currentItem, props.order);
    setIsDrag(false);
  };

  return (
    <li
      className = { classNames({
        [styles.item]: true,
        [styles.done]: props.isDone,
      }) }
      draggable={ true }
      onDragEnd={ handleDragEnd }
      onDragLeave={ handleDragLeave }
      onDragOver={ handleDragOver }
      onDragStart={ handleDragStart }
      onDrop={ handleDrop }
    >
      <Checkbox
        style={{
          alignSelf: 'flex-start',
        }}
        checked={ props.isDone }
        name={ `checked ${props.value.toString()}` }
        onChange={ props.onChangeCheckbox }
      />
      <div
        className={ styles.itemValueWrapper }
        onDragLeave={ event => event.stopPropagation() }
        onDragEnter={ event => event.stopPropagation() }
      >
        <span
          ref={ itemEl }
          className={ classNames({
            [styles.itemValue]: true,
            [styles.isDrag]: isDrag,
          }) }
          key={ props.id }
          contentEditable={ props.isEditable }
          suppressContentEditableWarning={ true }
          onClick={ props.onSingleDoubleClick(
            () => props.onChangeCheckbox(),
            () => props.onEditItem(props.id, inputValue),
          ) }
          onInput={ () => setInputvalue(itemEl.current.textContent) }
          onBlur={ () => props.onEditItem(props.id, inputValue) }
          onKeyDown={ event => {
            if (event.code === 'Enter' ||
                event.code === 'NumpadEnter') {
              props.onEditItem(props.id, inputValue);
            } else if (event.code === 'Escape') {
              itemEl.current.textContent = props.value;
              props.onEditItem(props.id, props.value);
            }
          } }
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
    </li>
  );
};


export default TodoItem;
