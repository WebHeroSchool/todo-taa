import withMyPaperLayer from '../hoc/withMyPaperLayer/withMyPaperLayer';
import withIndent from '../hoc/withIndent/withIndent';

import Title from '../Title/Title';

const Contacts = () => (
  withMyPaperLayer(
    () => withIndent([
      () => <Title titleValue={ 'Контакты:' }/>,
    ]),
  )
);

export default Contacts;
