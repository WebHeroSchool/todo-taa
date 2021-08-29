import withMyPaperLayer from '../hoc/withMyPaperLayer/withMyPaperLayer';
import withIndent from '../hoc/withIndent/withIndent';

import Loader from '../Loader/Loader';
import Title from '../Title/Title';


const Contacts = props => (
  <>
    { props.contacts.isLoading ?
      withMyPaperLayer(
        withIndent([
          <Loader />,
        ])) :
      withMyPaperLayer(
        withIndent([
          <Title titleValue={ 'Контакты:' }/>,
          <div>
            Имя: { props.contacts.items.name || 'loading...' }
            <br/>
            Nickname: { props.contacts.items.login || 'loading...' }
            <br/>
            Адрес: { props.contacts.items.location || 'loading...' }
            <br/>
            Twitter: { props.contacts.items.twitter_username || 'loading...' }
            <br/>
          </div>,
        ]),
      )
    }
  </>
);


export default Contacts;
