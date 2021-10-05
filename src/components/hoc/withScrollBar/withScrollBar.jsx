import styles from './withScrollBar.module.css';
import classNames from 'classnames';

import {
  useState,
  useEffect,
  useRef,
} from 'react';


const withScrollBar = (Component, props, items = 0) => {
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

  useEffect(
    () => {
      console.log(scrollPosition);
      if (window.thumb) {
        window.thumb.style.transform =
        `translateY(${scrollPosition === 20 ?
          scrollPosition - 1 : scrollPosition}rem)`;
      }
    }, [
      scrollPosition,
    ]
  );

  useEffect(
    () => {
      setScrollPosition(0);
    }, [
      items.length,
    ]
  );

  const onSizeScrollMove = event => setScrollPosition(
    Math.floor(event.currentTarget.scrollTop /
    (event.currentTarget.scrollHeight - event.currentTarget.offsetHeight) * 20)
  );

  useEffect(() => {
    setTimeout(() => {
      setIsScroll(
        noScrollEl.current.clientWidth - wrapperEl.current.clientWidth <= 2
      );
    }, 0);
  }, [
    props,
  ]);


  return (
    <div ref={ wrapperEl } className={ styles.contentWrapper }>
      <div ref={ noScrollEl } className={ styles.noScrollWrapper }
        onScroll={ onSizeScrollMove }
      >
        <Component { ...props } />
      </div>
      <div className={ classNames({
        [styles.scrollbar]: true,
        [styles.hideScrollbar]: !isScroll,
      }) }>
        <div id="thumb" className={ styles.thumb }></div>
      </div>
    </div>
  );
};


export default withScrollBar;
