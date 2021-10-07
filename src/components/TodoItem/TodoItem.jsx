import classnames from 'classnames';
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


const dragStartHandler = (event, itemOrder) => {
  console.log('event start');
  console.log('drag item order: ', itemOrder);
};

const dragEndHandler = (setOrderItems, dragItem, coverItem) => {
  setOrderItems(dragItem, coverItem);
  console.log('dragItem: ', dragItem);
  console.log('coverItem: ', coverItem);
};


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
    dragItem,
    // setdragItem,
  ] = useState(props.order);
  const [
    coverItem,
    setCoverItem,
  ] = useState(0);


  return (
    <span
      className = { classnames({
        [styles.item]: true,
        [styles.done]: props.isDone,
      }) }
      draggable={ true }
      onDragStart={ event => dragStartHandler(event, dragItem) }
      onDragEnd={ event => {
        dragEndHandler(
          props.setOrderItems,
          dragItem,
          coverItem,
        );
        console.log(event);
      } }
      onDragEnter={ () => {
        setCoverItem(props.order);
        console.log(coverItem);
      } }
    >
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
          className={ styles.itemValue }
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
    </span>
  );
};


export default TodoItem;
