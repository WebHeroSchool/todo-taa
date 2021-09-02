import styles from './Title.module.css';


const Title = ({
  titleValue,
}) => (
  <h1 className={ styles.title }>
    { titleValue }
  </h1>
);


export default Title;
