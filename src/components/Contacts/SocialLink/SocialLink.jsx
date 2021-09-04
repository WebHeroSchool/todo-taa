import {
  ReactSVG,
} from 'react-svg';

import classNames from 'classnames';

import styles from './SocialLink.module.css';


const SocialLink = ({
  iconSrc,
  linkTo,
  linkValue,
  isEmail,
  isBlank,
  isWithMiddleMargin,
}) => (
  <a
    className={ styles.contactData }
    href={ isEmail ? `mailto:${linkTo}` : linkTo }
    target={ isBlank ? 'blank' : '' }
  >
    <ReactSVG
      className={classNames({
        [styles.icon]: true,
        [styles.iconWithMiddleMargin]: isWithMiddleMargin,
      })}
      src={iconSrc}
      wrapper="span"
    />
    { linkValue }
  </a>
);


export default SocialLink;
