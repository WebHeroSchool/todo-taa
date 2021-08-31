import Loader from '../Loader/Loader';
import Title from '../Title/Title';

import styles from './Contacts.module.css';


const Contacts = props => (
  props.contacts.isLoading ?
    <Loader /> :
    <>
      <Title titleValue={
        props.contacts.fetchReposFailure ? 'Ошибка:' : 'Контакты:'
      }/>
      {props.contacts.fetchReposFailure ?
        <p>{ props.contacts.errorMessage }</p> :
        <ul className={styles.list}>
          <li>Имя: { props.contacts.items.name }</li>
          <li>Nickname: { props.contacts.items.login }</li>
          <li>Адрес: { props.contacts.items.location }</li>
          <li>Twitter: @{ props.contacts.items.twitter_username }</li>
        </ul>
      }
    </>
);


export default Contacts;
