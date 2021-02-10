import FilterListItems from '../FilterListItems/FilterListItems';
import {
  Button,
} from '@material-ui/core';
import styles from './Footer.module.css';

const Footer = ({
  count,
}) => (<div className={styles.footer}>
  Кол-во дел: {count}
  <FilterListItems />
  <Button
    variant="outlined"
    color="secondary"
    size="small">
    <span className={styles.buttonText}>Очистить выполненные</span>
  </Button>
</div>);

Footer.defaultProps = {
  count: 0,
};

export default Footer;
