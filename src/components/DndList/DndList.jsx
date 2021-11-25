import {
  useState,
} from 'react';
import styles from './DndList.module.css';

import {
  searchIndex,
  isSlideToDown,
  shift,
  setTransition,
  getHeight,
  endOfGesture,
} from './handlersUtils';

import {
  onPointerMoveHandler,
  onPointerDownHandler,
  onPointerOverHandler,
  onTouchOverHandler,
  onPointerUpListener,
  onContextMenuHandler,
} from './handleEvents';


const list = [
  {
    value: 1,
    order: 1,
  },
  {
    value: 2,
    order: 2,
  },
  {
    value: 3,
    order: 3,
  },
  {
    value: 4,
    order: 4,
  },
  {
    value: 5,
    order: 5,
  },
  {
    value: 6,
    order: 6,
  },
  {
    value: 7,
    order: 7,
  },
];


const DndList = () => {
  const [
    element,
    setElement,
  ] = useState(null);

  const [
    triggeredElement,
    setTriggeredElement,
  ] = useState(null);


  const onPointerLeaveHandler = () => {
    if (element) {
      endOfGesture(element, setElement, setTriggeredElement);
    }
  };


  return (
    <>
      <ul
        onPointerDown={ event => onPointerDownHandler(
          event.target,
          styles.listItem,
          shift,
          element,
          setElement,
        ) }
        onPointerLeave={ onPointerLeaveHandler }
        onPointerMove={ event => onPointerMoveHandler(event, element) }
        onTouchMove={ event => onTouchOverHandler(
          event,
          element,
          styles.listItem,
          triggeredElement,
          setTriggeredElement,
          shift,
          getHeight,
        ) }
        onPointerOver={ event => onPointerOverHandler(
          event,
          styles.listItem,
          element,
          setTriggeredElement,
          shift,
          setTransition,
          getHeight,
        ) }
        onPointerUp={ () => onPointerUpListener(
          element,
          triggeredElement,
          isSlideToDown,
          searchIndex,
          endOfGesture,
          setElement,
          setTriggeredElement,
        ) }
        onContextMenu={ onContextMenuHandler }
      >
        {
          list.map(
            element => (
              <li
                className={ styles.listItem }
                key={ element.value }
              >
                { element.value }
              </li>
            )
          )
        }
      </ul>
      <div>current hover: {'current'}</div>
      <div>prev hover: {'prev'}</div>
    </>
  );
};

export default DndList;
