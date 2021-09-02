import styles from './Subtitle.module.css';


const Subtitle = ({
  subtitleValue,
}) => (
  <p className={ styles.subtitle }>
    { subtitleValue }
  </p>
);


export default Subtitle;
