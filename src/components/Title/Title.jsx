import styles from './Title.module.css';


const Title = props => (
  <h1 className={ styles.title }>
    { props.titleValue }
  </h1>
);

export default Title;
