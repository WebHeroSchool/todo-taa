import {
  useState,
} from 'react';
import styles from './DndList.module.css';

import {
  searchIndex,
} from './handlersUtils';


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


  const shift = (element, height) => {
    element.style.transform = `translateY(${height ?
      height + 8 : height}px)`;
    let next;
    if (height) {
      next = element.nextElementSibling;
    } else {
      next = element.previousElementSibling;
    }

    if (next) {
      shift(next, height);
    }
  };

  const setTransition = (element, time = 0) => {
    element.style.transition = `transform ${time}s ease-out`;

    const next = element.nextElementSibling;
    if (next) {
      setTransition(next, time);
    }
  };


  const onPointerDownHandler = event => {
    if (event.target.className === styles.listItem) {
      event.target.parentElement.style.height = `${
        event.target.parentElement.offsetHeight}px`;
      event.target.style.pointerEvents = 'none';
      event.target.style.width = `${event.target.offsetWidth}px`;
      if (event.target.nextElementSibling) {
        shift(
          event.target.nextElementSibling, event.target.offsetHeight);
      }
      event.target.style.position = 'fixed';
      setElement(event.target);
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
        shift(event.target, height);
        setTransition(event.target.parentElement.firstElementChild, .1);
      }

      setTriggeredElement(event.target);
    }
  };


  const endOfGesture = () => {
    element.style.width = '';
    element.style.position = '';
    element.style.pointerEvents = '';
    element.style.color = 'red';
    shift(element.parentElement.lastElementChild, 0);
    setTransition(element.parentElement.firstElementChild, 0);
    setElement(null);
  };

  const onPointerLeaveHandler = () => {
    if (element) {
      endOfGesture();
    }
  };

  const onPointerMoveHandler = event => {
    if (element) {
      const shift = event.clientY - element.offsetTop -
        (element.scrollHeight * .5);
      // console.log(shift);
      element.style.transform = `translateY(${shift}px)`;
    }

    const elementUnderPointer = document.elementFromPoint(
      event.clientX, event.clientY);

    if (element && elementUnderPointer
        && elementUnderPointer.className === styles.listItem) {
      shift(elementUnderPointer, getHeight(elementUnderPointer));
      console.log(element.style.transform);
    }
  };

  const onPointerUpListener = () => {
    if (element) {
      let where;
      if (searchIndex(element) < searchIndex(triggeredElement)) {
        where = 'afterEnd';
      } else {
        where = 'beforeBegin';
      }

      triggeredElement.insertAdjacentElement(where, element);

      return endOfGesture();
    }
  };


  return (
    <>
      <ul
        className={ styles.wrapper }
        onPointerDown={ onPointerDownHandler }
        onPointerLeave={ onPointerLeaveHandler }
        onPointerMove={ onPointerMoveHandler }
        onPointerOver={ onPointerOverHandler }
        onPointerUp={ onPointerUpListener }
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
