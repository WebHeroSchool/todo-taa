import {
  useState,
} from 'react';
import styles from './DndList.module.css';

import {
  searchIndex,
  isSlideToDown,
  shift,
  setTransition,
} from './handlersUtils';

import {
  onPointerMoveHandler,
  onPointerDownHandler,
  onContextMenuHandler,
} from './touchEvents';


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


  const onPointerOverHandler = event => {
    if (document.elementFromPoint(
      event.clientX, event.clientY).className === styles.listItem) {
      let height;
      if (event.target.style.transform.length < 16) {
        height = event.target.offsetHeight;
      } else {
        height = 0;
      }

      if (element) {
        setTriggeredElement(event.target);
        shift(element, event.target, height);
        setTransition(event.target.parentElement.firstElementChild, .1);
      }
    }
  };

  const getHeight = element => {
    let height;
    if (element.style.transform.length < 16) {
      height = element.offsetHeight;
    } else {
      height = 0;
    }

    return height;
  };


  const onTouchOverHandler = event => {
    const elementUnderPointer = document.elementFromPoint(
      event.touches[0].pageX,
      event.touches[0].pageY);

    if (element && elementUnderPointer
        && elementUnderPointer.className === styles.listItem) {
      if (event.currentTarget.lastElementChild === triggeredElement) {
        setTriggeredElement(null);
      } else {
        setTriggeredElement(elementUnderPointer);
      }
      shift(element, elementUnderPointer, getHeight(elementUnderPointer));
    }
  };


  const endOfGesture = () => {
    element.style.width = '';
    element.style.position = '';
    element.style.pointerEvents = '';
    element.style.color = 'red';
    shift(element, element.parentElement.lastElementChild, 0, true);
    setTransition(element.parentElement.firstElementChild, 0);
    setElement(null);
    setTriggeredElement(null);
  };

  const onPointerLeaveHandler = () => {
    if (element) {
      endOfGesture();
    }
  };


  const onPointerUpListener = () => {
    if (element && triggeredElement) {
      let where;
      const isDown = isSlideToDown(searchIndex(element),
        searchIndex(triggeredElement));

      if ((isDown && triggeredElement.style.transform.length < 16)
        || (!isDown && triggeredElement.style.transform.length < 16)) {
        where = 'afterEnd';
      } else {
        where = 'beforeBegin';
      }

      triggeredElement.insertAdjacentElement(where, element);
    }

    if (element) {
      return endOfGesture();
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
        onTouchMove={ onTouchOverHandler }
        onPointerOver={ onPointerOverHandler }
        onPointerUp={ onPointerUpListener }
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
