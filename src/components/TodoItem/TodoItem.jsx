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

const dragEndHandler = setOrderItems => {
  setOrderItems();
  console.log('end');
};

const dragEnterHandler = event => {
  event.stopPropagation();
  event.preventDefault();
  console.log('enter: ', event.target);
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
    currentItem,
    // setCurrentItem,
  ] = useState(props.order);


  return (
    <span
      className = { classnames({
        [styles.item]: true,
        [styles.done]: props.isDone,
      }) }
      draggable={ true }
      onDragStart={ event => dragStartHandler(event, currentItem) }
      onDragEnd={ () => dragEndHandler(() => props.setOrderItems(currentItem)) }
      onDragEnter={ event => dragEnterHandler(event) }
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
