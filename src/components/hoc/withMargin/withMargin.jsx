import styles from './withMargin.module.css';

const withMargin = (Component, size, props) => (
  <div className={ styles[`marginBottom-${size}`] }>
    <Component { ...props } />
  </div>
);

export default withMargin;
