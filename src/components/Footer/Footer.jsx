import {
  connect,
} from 'react-redux';
import FilterListItems from '../FilterListItems/FilterListItems';
import {
  Button,
} from '@material-ui/core';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

const Footer = ({
  count,
}) => (
  <div className={styles.footer}>
    Кол-во дел: {count}
    <FilterListItems />
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

export default connect(
  state => ({
    count: state.todos.count,
  }),
)(Footer);
