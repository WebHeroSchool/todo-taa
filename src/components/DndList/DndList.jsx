// import {
//   useState,
//   useEffect,
//   useRef,
// } from 'react';
import styles from './DndList.module.css';

// import {
//   // testLog,
//   // eventLog,
//   // searchIndex,
// } from './handlersUtils';

import useTest from './useTest';


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
  console.log();
  const qwerty = useTest('new');
  const onPointerEnterHandler = () => {
    console.log(qwerty);
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
      <div>current hover: {useTest('lol')}</div>
      <div>prev hover: {useTest()}</div>
    </>
  );
};

export default DndList;
