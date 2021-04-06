import withMyPaperLayer from '../hoc/withMyPaperLayer/withMyPaperLayer';
import withIndent from '../hoc/withIndent/withIndent';

import Title from '../Title/Title';


const Contacts = props => (
  withMyPaperLayer(
    () => withIndent([
      () => <Title titleValue={ 'Контакты:' }/>,
      () => <div>
        Имя: { props.contacts.name } <br/>
        Nickname: { props.contacts.login } <br/>
        Адрес: { props.contacts.location } <br/>
      </div>,
    ]),
  )
);


export default Contacts;
