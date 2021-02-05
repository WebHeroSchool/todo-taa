import styles from './FiltrListItems.module.css';
import { ButtonGroup, Button } from '@material-ui/core';

const FiltrListItems = () => {
  return (<div className={styles.filtrWrapper}>
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button className={styles.buttonText}>Все</Button>
      <Button className={styles.buttonText}>Активные</Button>
      <Button className={styles.buttonText}>Выполненные</Button>
    </ButtonGroup>
  </div>);
}

export default FiltrListItems;
