import styles from './withScrollBar.module.css';
import classNames from 'classnames';

import {
  useState,
  useEffect,
  useRef,
} from 'react';


const withScrollBar = (Component, props, ...triggers) => {
  const [
    scrollPosition,
    setScrollPosition,
  ] = useState(0);

  const [
    isScroll,
    setIsScroll,
  ] = useState(false);


  const wrapperEl = useRef(null);
  const noScrollEl = useRef(null);
  const thumb = useRef(null);

  useEffect(
    () => {
      thumb.current.style.transform =
      `translateY(${scrollPosition}rem)`;
    }, [
      scrollPosition,
    ]
  );

  useEffect(
    () => {
      setScrollPosition(0);
      noScrollEl.current.scrollTop = 0;
    }, [
      ...triggers,
    ]
  );

  const onSizeScrollMove = event => setScrollPosition(
    Math.floor(event.currentTarget.scrollTop /
    (event.currentTarget.scrollHeight - event.currentTarget.offsetHeight) * 20)
  );

  useEffect(() => {
    setTimeout(() => setIsScroll(
      noScrollEl.current.scrollHeight > wrapperEl.current.clientHeight
    ), 0);
  }, [
    props,
  ]);


  return (
    <div ref={ wrapperEl } className={ classNames({
      [styles.contentWrapper]: true,
    }) }>
      <div
        ref={ noScrollEl }
        className={ styles.noScrollWrapper }
        onScroll={ onSizeScrollMove }
      >
        <Component { ...props } />
      </div>
      <div className={ classNames({
        [styles.scrollbar]: true,
        [styles.hideScrollbar]: !isScroll,
      }) }>
        <div ref={ thumb } className={ styles.thumb }></div>
      </div>
    </div>
  );
};


export default withScrollBar;
