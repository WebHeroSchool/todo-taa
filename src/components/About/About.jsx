import withMyPaperLayer from '../hoc/withMyPaperLayer/withMyPaperLayer';
import withIndent from '../hoc/withIndent/withIndent';

import Title from '../Title/Title';


const About = props => (
  withMyPaperLayer(
    () => withIndent([
      () => <Title titleValue={ 'Обо мне:' }/>,
      () => <ol>
        {
          props.state.map(
            item => (
              <li key={item.id}>
                { item.name }
              </li>
            )
          )
        }
      </ol>,
    ]),
  )
);

export default About;
