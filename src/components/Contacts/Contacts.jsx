import {
  ReactSVG,
} from 'react-svg';

import Loader from '../Loader/Loader';
import Title from '../Title/Title';

import emailIcon from './images/email.svg';
import telegramIcon from './images/telegram.svg';

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
                tkachuk.ant@mail.ru
              </p>
              <p className={ styles.contactData }>
                <ReactSVG
                  className={styles.icon}
                  src={telegramIcon}
                  wrapper="span" />
                +7(926)265-4213
              </p>
            </div>
          </div>
        }

      </div>
    </>
);


export default Contacts;
