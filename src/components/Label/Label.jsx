import styles from './Label.module.css';
import {
  ReactComponent as LabelSvg,
} from './images/label.svg';

const Label = () => (
  <>
    <LabelSvg className={ styles.wrapper }/>
  </>
);


export default Label;
