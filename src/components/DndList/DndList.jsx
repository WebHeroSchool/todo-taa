// import {
// useState,
// useEffect,
// useRef,
// } from 'react';
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
  // const [
  //   shift,
  //   setShift,
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

  const onPointerEnterHandler = event => {
    let height;
    if (event.target.style.transform.length < 16) {
      height = event.target.offsetHeight;
    } else {
      height = 0;
    }

    shift(event.target, height);

    // event.target.style.transform = `translateY(${getShift()}px)`;
  };

  return (
    <>
      <ul
        className={ styles.wrapper }
      >
        {
          list.map(
            element => (
              <li
                className={ styles.listItem }
                key={ element }
                onPointerEnter={ onPointerEnterHandler }
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
