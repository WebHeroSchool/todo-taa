import {
  useState,
  useEffect,
  useRef,
} from 'react';
import styles from './DndList.module.css';

import {
  endOfGesture,
} from './handlersUtils';

import {
  onPointerMoveHandler,
  onPointerDownHandler,
  onPointerOverHandler,
  onTouchOverHandler,
  onPointerUpListener,
  onContextMenuHandler,
  onPointerLeaveHandler,
} from './handleEvents';

import TodoItemContainer from '../TodoItem/TodoItemContainer';


const initialList = [
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


const DndList = ({
  list = initialList,
}) => {
  const [
    element,
    setElement,
  ] = useState(null);

  const [
    triggeredElement,
    setTriggeredElement,
  ] = useState(null);

  const ulElement = useRef(null);


  useEffect(() => {
    const onHtmlUpHandler = onPointerLeaveHandler.bind(
      event,
      ulElement,
      element,
      endOfGesture,
      setElement,
      setTriggeredElement,
    );


    document.documentElement.addEventListener('pointerup', onHtmlUpHandler);

    return () => {
      document.documentElement.removeEventListener('pointerup',
        onHtmlUpHandler);
    };
  }, [
    element,
  ]);


  return (
    <ul ref={ ulElement }
      onPointerDown={ event => onPointerDownHandler(
        event.target.closest('li'),
        ulElement,
        element,
        setElement,
      ) }
      onPointerMove={ event => onPointerMoveHandler(event, element) }
      onTouchMove={ event => onTouchOverHandler(
        event,
        element,
        styles.listItem,
        triggeredElement,
        setTriggeredElement,
      ) }
      onPointerOver={ event => onPointerOverHandler(
        event,
        ulElement,
        element,
        setTriggeredElement,
      ) }
      onPointerUp={ () => onPointerUpListener(
        element,
        triggeredElement,
        endOfGesture,
        setElement,
        setTriggeredElement,
      ) }
      onContextMenu={ onContextMenuHandler }
    >
      {
        list.map(
          item => (
            /* <li
              className={ styles.listItem }
              key={ element.value }
            >
              { element.value }
            </li> */
            <TodoItemContainer
              key={ item.id.toString() }
              // currentItem={ currentItem }
              // setCurrentItem={ setCurrentItem }
              // currentHeight={ currentHeight }
              // setCurrentHeight={ setCurrentHeight }
              { ...item }
            />
          )
        )
      }
    </ul>
  );
};

export default DndList;
