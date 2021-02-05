import FilterListItems from '../FilterListItems/FilterListItems';
import { Button } from '@material-ui/core';
import styles from './Footer.module.css';

const Footer = (props) => {
  return (<div className={styles.footer}>
    Кол-во дел: {props.count}
    <FilterListItems />
    <Button variant="outlined" color="secondary" size="small" >
      <span className={styles.buttonText}>Очистить выполненные</span>
    </Button>
  </div>);
}

export default Footer;
