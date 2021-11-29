import {
  useState,
} from 'react';
import styles from './DndList.module.css';

import {
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


  /* onPointerLeave={ () => onPointerLeaveHandler(
    element,
    endOfGesture,
    setElement,
    setTriggeredElement,
  ) } */


  return (
    <>
      <ul
        onPointerDown={ event => onPointerDownHandler(
          event.target,
          styles.listItem,
          element,
          setElement,
        ) }
        onPointerMove={ event => onPointerMoveHandler(event, element) }
        onTouchMove={ event => onTouchOverHandler(
          event,
          element,
          styles.listItem,
          triggeredElement,
          setTriggeredElement,
        ) }
        onPointerOver={ event => onPointerOverHandler(
          event,
          styles.listItem,
          element,
          setTriggeredElement,
        ) }
        onPointerUp={ () => onPointerUpListener(
          element,
          triggeredElement,
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
    </>
  );
};

export default DndList;
