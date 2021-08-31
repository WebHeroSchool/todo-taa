import FilterListItemsContainer from
  '../FilterListItems/FilterListItemsContainer';
import {
  Button,
} from '@material-ui/core';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

const Footer = props => (
  <div className={styles.footer}>
    Кол-во дел: {props.count}
    <FilterListItemsContainer />
    <Button
      variant="outlined"
      color="secondary"
      size="small">
      <span className={styles.buttonText}>Очистить выполненные</span>
    </Button>
  </div>
);

Footer.defaultProps = {
  count: 0,
};

Footer.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Footer;
