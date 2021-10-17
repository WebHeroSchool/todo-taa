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
  const listEl = useRef(null);

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
  const [
    toUpAnimation,
    setToUpAnimation,
  ] = useState(false);
  const [
    toBottomAnimation,
    setToBottomAnimation,
  ] = useState(false);

  const handleDragStart = () => {
    props.setCurrentItem(props.order);
    props.setCurrentHeight(listEl.current.clientHeight);
  };
  const handleDragEnd = () => {
    setIsDrag(false);
  };
  const handleDragLeave = () => {
    setIsDrag(false);
    setToUpAnimation(false);
    setToBottomAnimation(false);
  };
  const handleDragOver = () => {
    event.preventDefault();
    if (props.order !== props.currentItem) {
      setIsDrag(true);
      setToUpAnimation(props.order < props.currentItem);
      setToBottomAnimation(props.order > props.currentItem);
    }
  };
  const handleDrop = () => {
    props.setOrderItems(props.currentItem, props.order);
    setIsDrag(false);
    setToUpAnimation(false);
    setToBottomAnimation(false);
  };

  return (
    <li
      ref={ listEl }
      className = { classNames({
        [styles.item]: true,
        [styles.done]: props.isDone,
        [styles.toUpAnimation]: toUpAnimation,
        [styles.toBottomAnimation]: toBottomAnimation,
      }) }
      draggable={ !props.isSort }
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
      >
        <span
          ref={ itemEl }
          className={ classNames({
            [styles.itemValue]: true,
            [styles.isDrag]: isDrag,
            [styles.unselectable]: props.isSort,
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
