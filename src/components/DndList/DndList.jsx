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
  const [
    selectedEl,
    setSelectedEl,
  ] = useState(null);

  // const [
  //   coordinateX,
  //   setCoodrinateX,
  // ] = useState(null);

  const [
    coordinateY,
    setCoodrinateY,
  ] = useState(null);


  useEffect(() => {
    window.addEventListener('pointermove', onPointerMoveHandler);
    console.log('body');
  }, []);

  const onPointerDownHandler = event => {
    setSelectedEl(event.target);
    // console.log(event);

    // setCoodrinateX(event.clientX -
    //   event.target.offsetLeft -
    //   (event.target.offsetWidth * .5));

    setCoodrinateY(event.clientY -
      event.target.offsetTop -
      (event.target.offsetHeight * .5));
  };

  // const onPointerMoveHandler = event => {
  //   if (selectedEl) {
  //     console.log('tets');
  //     setCoodrinateX(event.clientX -
  //       selectedEl.offsetLeft -
  //       (selectedEl.offsetWidth * .5));

  //     setCoodrinateY(event.clientY -
  //       selectedEl.offsetTop -
  //       (selectedEl.offsetHeight * .5));
  //   };
  // };

  const onPointerMoveHandler = event => {
    console.log('tets');
    // setCoodrinateX(event.clientX -
    //   event.target.offsetLeft -
    //   (event.target.offsetWidth * .5));

    setCoodrinateY(event.clientY -
        event.target.offsetTop -
        (event.target.offsetHeight * .5));
  };

  const onPointerUpHandler = event => {
    event.target.style.transform = 'unset';
    setSelectedEl(null);
  };


  useEffect(() => {
    if (selectedEl) {
      selectedEl.style.transform = `scaleX(1.1) translateY(${coordinateY}px)`;
    };
  },
  [
    selectedEl,
    // coordinateX,
    coordinateY,
  ]);


  return (
    <ul className={ styles.wrapper }
    >
      {
        list.map(
          element => (
            <li
              className={ styles.listItem }
              key={ element }
              onPointerDown={ onPointerDownHandler }
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
