import {
  useState,
} from 'react';
import styles from './DndList.module.css';


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

  const onPointerOverHandler = event => {
    if (event.target.className === styles.listItem) {
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
    }
  };


  const cancel = () => {
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
      cancel();
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
