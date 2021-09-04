import classNames from 'classnames';

import styles from './Title.module.css';


const helper = (variant, titleValue) => {
  if (variant === 'h1') {
    return (
      <h1 className={ classNames(
        styles.title,
        styles.h1,
      ) }>
        { titleValue }
      </h1>
    );
  } else if (variant === 'h2') {
    return (
      <h2 className={ classNames(
        styles.title,
        styles.h2,
      ) }>
        { titleValue }
      </h2>
    );
  };
};


const Title = ({
  variant = 'h1',
  titleValue,
}) => (
  <>
    { helper(variant, titleValue) }
  </>
);


export default Title;
