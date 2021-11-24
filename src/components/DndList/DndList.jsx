import {
  useState,
} from 'react';
import styles from './DndList.module.css';

import {
  searchIndex,
  slideToDown,
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


  const shift = (thisElement, height, lastModify = false) => {
    if (thisElement !== element
        || (thisElement === element && lastModify)) {
      thisElement.style.transform = `translateY(${height ?
        height + 8 : height}px)`;
    }
    let next;
    if (height) {
      next = thisElement.nextElementSibling;
    } else {
      next = thisElement.previousElementSibling;
    }

    if (next) {
      shift(next, height, lastModify);
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
        console.log('shift');
        shift(event.target, height);
        setTransition(event.target.parentElement.firstElementChild, .1);
      }

      setTriggeredElement(event.target);
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
      shift(elementUnderPointer, getHeight(elementUnderPointer));
    }

    // if (elementUnderPointer.className === styles.listItem
    //     && elementUnderPointer !== element) {
    //   // shift(elementUnderPointer, getHeight(elementUnderPointer));
    //   console.log(event);
    // }
  };


  const endOfGesture = () => {
    element.style.width = '';
    element.style.position = '';
    element.style.pointerEvents = '';
    element.style.color = 'red';
    shift(element.parentElement.lastElementChild, 0, true);
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
      // console.log('shift - ', shift);
      element.style.transform = `translateY(${shift}px)`;
    }
  };

  const onPointerUpListener = () => {
    // console.log(searchIndex(triggeredElement));

    if (element) {
      let where;
      if (slideToDown(searchIndex(element), searchIndex(triggeredElement))) {
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
        onPointerDown={ onPointerDownHandler }
        onPointerLeave={ onPointerLeaveHandler }
        onPointerMove={ onPointerMoveHandler }
        onTouchMove={ onTouchOverHandler }
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
