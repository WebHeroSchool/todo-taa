import withMyPaperLayer from '../hoc/withMyPaperLayer/withMyPaperLayer';
import withIndent from '../hoc/withIndent/withIndent';

import Title from '../Title/Title';


const Contacts = props => (
  withMyPaperLayer(
    () => withIndent([
      () => <Title titleValue={ 'Контакты:' }/>,
      () => <div>
        Имя: { props.contacts.name || 'loading...' }
        <br/>
        Nickname: { props.contacts.login || 'loading...' }
        <br/>
        Адрес: { props.contacts.location || 'loading...' }
        <br/>
      </div>,
    ]),
  )
);


export default Contacts;
