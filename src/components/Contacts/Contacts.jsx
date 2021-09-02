import Loader from '../Loader/Loader';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';

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
            <Subtitle subtitleValue={ props.contacts.items.bio }/>
            <p>tkachuk.ant@mail.ru</p>
            <p>+7(926)265-4213</p>
            <p>Twitter: @{ props.contacts.items.twitter_username }</p>
            <p>{ props.contacts.items.location }</p>
          </div>
        }

      </div>
    </>
);


export default Contacts;
