import Loader from '../Loader/Loader';
import Title from '../Title/Title';
import SocialLink from './SocialLink/SocialLink';

import emailIcon from './images/email.svg';
import telegramIcon from './images/telegram.svg';
import githubIcon from './images/github.svg';
import linkedinIcon from './images/linkedin.svg';
import twitterIcon from './images/twitter.svg';

import styles from './Contacts.module.css';

import {
  useState,
} from 'react';
import classNames from 'classnames';

const Contacts = props => {
  const [
    avatarIsLoad,
    setAvatarIsLoad,
  ] = useState(false);

  if (props.contacts.isLoading || props.contacts.fetchContactsFailure) {
    return <Loader />;
  } else if (props.contacts.fetchContactsFailure) {
    <p>Fetch error: { props.contacts.errorMessage }</p>;
  } return (
    <>
      <div className={ styles.contactsInner }>

        <div className={ styles.avatarContainer }>
          <img
            className={ classNames({
              [styles.avatar]: true,
              [styles.visible]: avatarIsLoad,
            }) }
            src={ props.contacts.items.avatar_url }
            alt="user avatar"
            onLoad={() => setAvatarIsLoad(true)}
          />
          { (!avatarIsLoad) ? <Loader /> : false }
        </div>
        <div className={ styles.contactsWrapper }>
          <Title variant="h1" titleValue={ props.contacts.items.name } />

          <div className={ styles.content }>
            <p>{ props.contacts.items.bio }</p>
            <SocialLink
              iconSrc={ emailIcon }
              linkTo={ props.contacts.items.email }
              linkValue={ props.contacts.items.email }
              isEmail={true}
            />
            <SocialLink
              iconSrc={ telegramIcon }
              linkTo={ `tg://resolve?domain=${props.contacts.items.login}` }
              linkValue="+7(926)265-4213"
            />
          </div>

          <div className={ styles.networks }>
            <SocialLink
              iconSrc={ githubIcon }
              linkTo={ props.contacts.items.html_url }
              isBlank={ true }
              isWithMiddleMargin={ true }
            />
            <SocialLink
              iconSrc={ linkedinIcon }
              linkTo="https://linkedin.com/in/tkachuk-anton/"
              isBlank={ true }
              isWithMiddleMargin={ true }
            />
            <SocialLink
              iconSrc={ twitterIcon }
              linkTo={ `https://twitter.com/${
                props.contacts.items.twitter_username}` }
              isBlank={ true }
              isWithMiddleMargin={ true }
            />
          </div>
        </div>

      </div>
    </>
  );
};

export default Contacts;
