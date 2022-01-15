import classNames from 'classnames';
import styles from './SocialLink.module.css';


const withLink = (
  Image,
  {
    linkTo,
    linkValue,
    isEmail,
    isBlank,
    isWithMiddleMargin,
  },
) => (
  <a
    className={ styles.contactData }
    href={ isEmail ? `mailto:${linkTo}` : linkTo }
    target={ isBlank ? 'blank' : '' }
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
