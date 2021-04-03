import withMyPaperLayer from '../hoc/withMyPaperLayer/withMyPaperLayer';
import withIndent from '../hoc/withIndent/withIndent';

import Title from '../Title/Title';


const About = () => (
  withMyPaperLayer(
    () => withIndent([
      () => <Title titleValue={ 'Обо мне:' }/>,
    ]),
  )
);

export default About;
