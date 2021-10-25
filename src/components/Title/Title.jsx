import classNames from 'classnames';
import styles from './Title.module.css';


const Title = ({
  variant,
  titleValue,
}) => {
  if (variant === 'h2') {
    return (
      <h2 className={classNames(
        styles.title,
        styles.h2,
      )}>{ titleValue }</h2>
    );
  } return (
    <h1 className={classNames(
      styles.title,
      styles.h1,
    )}>{ titleValue }</h1>
  );
};


export default Title;
