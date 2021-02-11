import FilterListItems from '../FilterListItems/FilterListItems';
import {
  Button,
} from '@material-ui/core';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

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

Footer.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number.isRequired,
};

export default Footer;
