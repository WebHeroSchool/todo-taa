import Loader from '../Loader/Loader';
import Title from '../Title/Title';


const Contacts = props => (
  props.contacts.isLoading ?
    <Loader /> :
    <>
      <Title titleValue={
        props.contacts.fetchReposFailure ? 'Ошибка:' : 'Контакты:'
      }/>
      {props.contacts.fetchReposFailure ?
        <p>{ props.contacts.errorMessage }</p> :
        <div>
          Имя: { props.contacts.items.name }
          <br/>
          Nickname: { props.contacts.items.login }
          <br/>
          Адрес: { props.contacts.items.location }
          <br/>
          Twitter: { props.contacts.items.twitter_username }
          <br/>
        </div>
      }
    </>
);


export default Contacts;
