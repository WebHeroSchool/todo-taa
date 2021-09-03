import {
  ReactSVG,
} from 'react-svg';

import classNames from 'classnames';

import Loader from '../Loader/Loader';
import Title from '../Title/Title';

import emailIcon from './images/email.svg';
import telegramIcon from './images/telegram.svg';
import githubIcon from './images/github.svg';
import linkedinIcon from './images/linkedin.svg';
import twitterIcon from './images/twitter.svg';

import styles from './Contacts.module.css';


const Contacts = props => (
  props.contacts.isLoading ?
    <Loader /> :
    <>
      <div className={ styles.contactsInner }>

        <img
          className={ styles.avatar }
          src={ props.contacts.items.avatar_url }
          alt="user avatar"
        />

        {props.contacts.fetchReposFailure ?
          <p>{ props.contacts.errorMessage }</p> :

          <div className={ styles.contactsWrapper }>
            <Title titleValue={ props.contacts.items.name }/>
            <div className={ styles.content }>
              <p>{ props.contacts.items.bio }</p>
              <p className={ styles.contactData }>
                <ReactSVG
                  className={styles.icon}
                  src={emailIcon}
                  wrapper="span" />
                <a href="mailto:tkachuk.ant@mail.ru">tkachuk.ant@mail.ru</a>
              </p>
              <p className={ styles.contactData }>
                <ReactSVG
                  className={styles.icon}
                  src={telegramIcon}
                  wrapper="span" />
                <a
                  href={ `tg://resolve?domain=${props.contacts.items.login}` }
                >
                  +7(926)265-4213
                </a>
              </p>
            </div>
            <div className={ styles.networks }>
              <a href={ props.contacts.items.html_url }>
                <ReactSVG
                  className={classNames(
                    styles.icon,
                    styles.iconWithMiddleMargin,
                  )}
                  src={githubIcon}
                  wrapper="span"
                />
              </a>
              <a href="https://linkedin.com/in/tkachuk-anton/">
                <ReactSVG
                  className={classNames(
                    styles.icon,
                    styles.iconWithMiddleMargin,
                  )}
                  src={linkedinIcon}
                  wrapper="span"
                />
              </a>
              <a
                href={ `https://twitter.com/${
                  props.contacts.items.twitter_username}` }
              >
                <ReactSVG
                  className={classNames(
                    styles.icon,
                    styles.iconWithMiddleMargin,
                  )}
                  src={twitterIcon}
                  wrapper="span"
                />
              </a>
            </div>
          </div>
        }

      </div>
    </>
);


export default Contacts;
