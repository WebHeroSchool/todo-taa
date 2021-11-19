import {
  useState,
  // useEffect,
  // useRef,
} from 'react';
import styles from './DndList.module.css';

// import {
//   // testLog,
//   // eventLog,
//   // searchIndex,
// } from './handlersUtils';


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
    element,
    setElement,
  ] = useState(null);

  // const [
  //   coordX,
  //   setCoordX,
  // ] = useState(0);

  // const [
  //   coordY,
  //   setCoordY,
  // ] = useState(0);


  const shift = (element, height) => {
    element.style.transform = `translateY(${height}px)`;
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


  const onPointerDownHandler = event => {
    if (event.target.className === styles.listItem) {
      // const clone = event.target.cloneNode(true);
      // clone.style.pointerEvents = 'none';
      event.target.parentElement.style.height = `${
        event.target.parentElement.offsetHeight}px`;
      event.target.style.pointerEvents = 'none';
      event.target.style.width = `${event.target.offsetWidth}px`;
      event.target.style.boxSizing = 'border-box';
      event.target.style.position = 'fixed';
      // clone.style.position = 'absolute';
      // event.target.after(clone);
      // event.target.remove();
      setElement(event.target);
    }
    // console.log(event);
    // shift(event.target, event.target.offsetHeight);
  };

  const onPointerOverHandler = event => {
    // console.log(event);
    // if (event.target === element) {
    //   return event.stopPropagation();
    // }
    // console.log(event.target.innerText);
    if (event.target.className === styles.listItem) {
      let height;
      if (event.target.style.transform.length < 16) {
        height = event.target.offsetHeight;
      } else {
        height = 0;
      }

      if (element) {
        shift(event.target, height);
      }
    }
  };

  const onPointerLeaveHandler = () => {
    if (element) {
      element.style.pointerEvents = 'auto';
      element.style.color = 'red';
      shift(element.parentElement.lastElementChild, 0);
      setElement(null);
    }
  };

  const onPointerMoveHandler = event => {
    if (element) {
      const shift = event.clientY - element.offsetTop -
        (element.scrollHeight * .5);
      element.style.transform = `translateY(${shift}px)`;
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
      >
        {
          list.map(
            element => (
              <li
                className={ styles.listItem }
                key={ element }
              >
                { element }
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
