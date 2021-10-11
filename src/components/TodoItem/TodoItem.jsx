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
    isGap,
    setIsGap,
  ] = useState(false);


  const handleDragStart = item => {
    props.setCurrentItem(item);
  };
  const handleDragEnter = () => {
    console.log('enter');
    setIsGap(true);
    console.log(isGap);
  };
  const handleDragOver = () => {
    // event.preventDefault();
    setIsGap(false);
  };
  const handleDrop = (event, item) => {
    event.preventDefault();
    props.setOrderItems(props.currentItem, item);
  };

  return (
    <li
      className = { classnames({
        [styles.item]: true,
        [styles.done]: props.isDone,
        [styles.gap]: isGap,
      }) }
      draggable={ true }
      onDragEnter={ handleDragEnter }
      onDragOver={ event => handleDragOver(event) }
      onDragStart={ () => handleDragStart(props.order) }
      onDrop={ event => handleDrop(event, props.order) }
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
    </li>
  );
};


export default TodoItem;
