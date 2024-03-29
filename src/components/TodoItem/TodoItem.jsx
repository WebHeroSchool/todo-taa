import classNames from 'classnames';
import styles from './TodoItem.module.css';

import {
  Button,
  Checkbox,
  Tooltip,
} from '@material-ui/core';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import DragHandleIcon from '@material-ui/icons/DragHandle';

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


  return (
    <Tooltip
      title="Слишком длинное слово"
      placement="top"
      arrow
      open={ props.isWrongValue }
    >
      <li
        ref={ listEl }
        className = { classNames({
          [styles.item]: true,
          [styles.done]: props.isDone,
        }) }
        data-order = { props.order }
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
              [styles.unselectable]: props.isSort,
              [styles.wrongInputValue]: props.isWrongValue,
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
                event.preventDefault();
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
          onClick={ props.onDeleteItem }
          title="Удалить дело"
        >
          <DeleteForeverTwoToneIcon fontSize="medium" />
        </Button>
        <div
          className={ classNames(
            'draggable',
            styles.touchActionsOff,
            styles.draggable,
          ) }
          onPointerDown = {
            () => document.body.classList.add(styles.unselectable)}
        >
          <DragHandleIcon className={ styles.DragHandleIcon } />
        </div>
      </li>
    </Tooltip>
  );
};


export default TodoItem;
