import {
  useState,
  useEffect,
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
  const onPointerDownHandler = event => {
    setSelectedEl(event.target);
    console.log(event);

    setCoodrinateX(event.clientX -
      event.target.offsetLeft -
      (event.target.offsetWidth * .5));

    setCoodrinateY(event.clientY -
      event.target.offsetTop -
      (event.target.offsetHeight * .5));
  };

  const onPointerMoveHandler = event => {
    if (selectedEl) {
      setCoodrinateX(event.clientX -
        selectedEl.offsetLeft -
        (selectedEl.offsetWidth * .5));

      setCoodrinateY(event.clientY -
        selectedEl.offsetTop -
        (selectedEl.offsetHeight * .5));
    };
  };

  const onPointerUpHandler = () => {
    if (selectedEl) {
      selectedEl.style.transform = 'unset';
    };
    setSelectedEl(null);
  };


  const [
    selectedEl,
    setSelectedEl,
  ] = useState(null);

  const [
    coordinateX,
    setCoodrinateX,
  ] = useState(null);

  const [
    coordinateY,
    setCoodrinateY,
  ] = useState(null);


  useEffect(() => {
    if (coordinateX || coordinateY) {
      selectedEl.style.transform = `scale(1.1, 1) translate(${
        coordinateX}px, ${coordinateY}px)`;
    };
  },
  [
    coordinateX,
    coordinateY,
  ]);


  return (
    <ul
    >
      {
        list.map(
          element => (
            <li
              className={ styles.listItem }
              key={ element }
              onPointerDown={ onPointerDownHandler }
              onPointerMove={ onPointerMoveHandler }
              onPointerUp={ onPointerUpHandler }
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
