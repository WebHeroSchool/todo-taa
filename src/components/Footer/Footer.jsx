import FilterListItems from '../FilterListItems/FilterListItems';
import {
  Button,
} from '@material-ui/core';
import styles from './Footer.module.css';

const Footer = props => (<div className={styles.footer}
  onClick={props.onClickFooter}>
  Кол-во дел: {props.count}
  <FilterListItems />
  <Button
    variant="outlined"
    color="secondary"
    size="small">
    <span className={styles.buttonText}>Очистить выполненные</span>
  </Button>
</div>);

export default Footer;
