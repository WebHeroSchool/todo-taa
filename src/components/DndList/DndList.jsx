import {
  useState,
  // useEffect,
} from 'react';
import styles from './DndList.module.css';

import {
  onTouchStartHandler,
  onTouchMoveHandler,
  onTouchStopHandler,
  onContextMenuHandler,
} from './touchEvents';

const list = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
];


const DndList = () => {
  const [
    selectedEl,
    setSelectedEl,
  ] = useState(null);
  const [
    timerId,
    setTimerId,
  ] = useState(null);

  const setTranslateNextEl = element => {
    const nextEl = element.nextElementSibling;
    if (nextEl) {
      nextEl.style.transform = `translateY(${element.offsetHeight}px)`;
      setTranslateNextEl(nextEl);
    }
  };

  const onPointerDownHandler = event => {
    if (event.pointerType !== 'touch') {
      setSelectedEl(event.target);
    }
    // event.target.style.position = 'absolute';
    // event.target.style.transform = `scaleX(1.1)`;
  };

  const onDragStartHandler = event => {
    setSelectedEl(event.target);
    setTranslateNextEl(event.target);
  };

  const onDragOverHandler = event => {
    // console.log(event);
    selectedEl.style.transform = `translateY(${event.pageY}px)`;
  };

  const onDragEnterHandler = event => {
    // selectedEl.remove();
    event.target.style.transform = 'unset';
    // event.target.style.transform = `translateY(${
    //   event.target.offsetHeight
    // }px)`;
    // event.target.insertAdjacentElement('afterend', selectedEl);
  };

  const onPointerUpHandler = event => {
    event.target.style.transform = 'unset';
  };


  return (
    <ul
      className={ styles.wrapper }
    >
      {
        list.map(
          element => (
            <li
              className={ styles.listItem }
              key={ element }
              draggable={ true }
              onDragStart={ onDragStartHandler }
              onDragOver={ onDragOverHandler }
              onDragEnter={ onDragEnterHandler }
              onPointerDown={ onPointerDownHandler }
              onPointerUp={ onPointerUpHandler }
              onTouchStart={
                event => onTouchStartHandler(event, setTimerId, setSelectedEl) }
              onTouchMove={
                event => onTouchMoveHandler(event, selectedEl, timerId) }
              onTouchEnd={
                event => onTouchStopHandler(event, setSelectedEl, timerId) }
              onContextMenu={ onContextMenuHandler }
            >
              { element }
            </li>
          )
        )
      }
    </ul>
  );
};

export default DndList;
