import Loader from '../Loader/Loader';
import Title from '../Title/Title';

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
            <p>{ props.contacts.items.bio }</p>
            <p>E-mail: { props.contacts.items.email }</p>
            <p>Nickname: { props.contacts.items.login }</p>
            <p>Адрес: { props.contacts.items.location }</p>
            <p>Twitter: @{ props.contacts.items.twitter_username }</p>
          </div>
        }

      </div>
    </>
);


export default Contacts;
