import styles from './Contacts.module.css';
import classNames from 'classnames';

import Helmet from 'react-helmet';

import Loader from '../Loader/Loader';
import Title from '../Title/Title';
import withLink from '../hoc/withLink/withLink';

import {
  ReactComponent as EmailIcon,
} from './images/email.svg';
import {
  ReactComponent as EmailRoundIcon,
} from './images/emailRound.svg';
import {
  ReactComponent as TelegramIcon,
} from './images/telegram.svg';
import {
  ReactComponent as TelegramRoundIcon,
} from './images/telegramRound.svg';
import {
  ReactComponent as GithubIcon,
} from './images/github.svg';
import {
  ReactComponent as LinkedinIcon,
} from './images/linkedin.svg';
import {
  ReactComponent as TwitterIcon,
} from './images/twitter.svg';


import {
  useState,
} from 'react';

const EmailLink = props => withLink(EmailIcon, props);
const EmailRoundLink = props => withLink(EmailRoundIcon, props);
const TelegramLink = props => withLink(TelegramIcon, props);
const TelegramRoundLink = props => withLink(TelegramRoundIcon, props);
const GithubLink = props => withLink(GithubIcon, props);
const LinkedinLink = props => withLink(LinkedinIcon, props);
const TwitterLink = props => withLink(TwitterIcon, props);

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
      <Helmet>
        <link
          rel="preload"
          href={ props.contacts.items.avatar_url }
          as="image"
        />
      </Helmet>
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
          <div className={ styles.titleWrapper }>
            <Title variant="h1" titleValue={ props.contacts.items.name } />
          </div>

          <div className={ styles.content }>
            <p className={ styles.bio }>{ props.contacts.items.bio }</p>

            <EmailLink
              linkTo={ props.contacts.items.email }
              linkValue={ props.contacts.items.email }
              isEmail={true}
              title="Написать мне на почту"
            />

            <TelegramLink
              linkTo={ `tg://resolve?domain=${props.contacts.items.login}` }
              linkValue="+7(926)265-4213"
              title="Написать мне в Телеграм"
            />
          </div>


          <div className={ styles.networks }>

            <div className={ styles.hidenLinks }>
              <EmailRoundLink
                linkTo={ props.contacts.items.email }
                isEmail={true}
                isWithMiddleMargin={ true }
                title="Написать мне на почту"
              />

              <TelegramRoundLink
                linkTo={ `tg://resolve?domain=${props.contacts.items.login}` }
                isWithMiddleMargin={ true }
                title="Написать мне в Телеграм"
              />
            </div>

            <GithubLink
              linkTo={ props.contacts.items.html_url }
              isBlank={ true }
              isWithMiddleMargin={ true }
              title="Мой GitHub"
            />

            <LinkedinLink
              linkTo="https://linkedin.com/in/tkachuk-anton/"
              isBlank={ true }
              isWithMiddleMargin={ true }
              title="Я в Linked In"
            />

            <TwitterLink
              linkTo={ `https://twitter.com/${
                props.contacts.items.twitter_username}` }
              isBlank={ true }
              isWithMiddleMargin={ true }
              title="Я в Twitter"
            />
          </div>
        </div>

      </div>
    </>
  );
};

export default Contacts;
