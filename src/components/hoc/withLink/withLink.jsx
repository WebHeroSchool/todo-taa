import classNames from 'classnames';
import styles from './withLink.module.css';


const withLink = (
  Image,
  {
    linkTo,
    linkValue,
    isEmail,
    isBlank,
    isWithMiddleMargin,
    title = 'Связаться со мной',
  },
) => (
  <a
    className={ styles.contactData }
    href={ isEmail ? `mailto:${linkTo}` : linkTo }
    target={ isBlank ? 'blank' : '' }
    title={ title }
  >
    <Image
      className={classNames({
        [styles.icon]: true,
        [styles.iconWithMiddleMargin]: isWithMiddleMargin,
      })}
    />
    { linkValue }
  </a>
);


export default withLink;
