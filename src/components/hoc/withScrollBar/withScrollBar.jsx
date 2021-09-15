import styles from './withScrollBar.module.css';

import {
  useState,
  useEffect,
} from 'react';


const withScrollBar = (Component, props) => {
  const [
    scrollPosition,
    setScrollPosition,
  ] = useState(0);

  useEffect(
    () => {
      if (window.thumb) {
        window.thumb.style.transform =
        `translateY(${scrollPosition === 20 ?
          scrollPosition - 1 : scrollPosition}rem)`;
      }
    }, [
      scrollPosition,
    ]
  );

  const onSizeScrollMove = event => setScrollPosition(
    Math.floor(event.currentTarget.scrollTop * 100 /
    (event.currentTarget.scrollHeight - event.currentTarget.offsetHeight)) / 5
  );


  return (
    <div className={ styles.contentWrapper }>
      <div className={ styles.noScrollWrapper }
        onScroll={ onSizeScrollMove }
        onTouchEnd={ onSizeScrollMove }
      >
        <Component {...props}/>
      </div>
      <div className={ styles.scrollbar }>
        <div id="thumb" className={ styles.thumb }></div>
      </div>
    </div>
  );
};


export default withScrollBar;
