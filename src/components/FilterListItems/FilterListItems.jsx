import styles from './FilterListItems.module.css';
import {
  ButtonGroup,
  Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const FilterListItems = props => (
  <div className={styles.filtrWrapper}>
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button
        className={styles.buttonText}
        onClick={() => props.setAllFilter()}
      >Все</Button>
      <Button
        className={styles.buttonText}
        onClick={() => props.setActiveFilter()}
      >Активные</Button>
      <Button
        className={styles.buttonText}
        onClick={() => props.setComplitedFilter()}
      >Выполненные</Button>
    </ButtonGroup>
  </div>
);

FilterListItems.propTypes = {
  className: PropTypes.string,
};

export default FilterListItems;
