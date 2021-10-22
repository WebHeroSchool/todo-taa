import FilterListItemsContainer from
  '../FilterListItems/FilterListItemsContainer';
import {
  Button,
} from '@material-ui/core';
import styles from './Footer.module.css';

const Footer = ({
  count,
  ...props
}) => (
  <div className={ styles.footer }>
    <span className={ styles.countWrapper }>
      Кол-во дел: { count ? count : 0 }
    </span>
    <span className={ styles.buttonsWrapper }>
      <FilterListItemsContainer />
      <Button
        className={ styles.deleteButton }
        variant="outlined"
        color="secondary"
        size="small"
        onClick={ () => props.onClearCompleted() }
      >
        <span className={ styles.buttonText }>Очистить выполненные</span>
      </Button>
    </span>
  </div>
);


export default Footer;
