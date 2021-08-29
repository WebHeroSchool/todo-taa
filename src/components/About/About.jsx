import withMyPaperLayer from '../hoc/withMyPaperLayer/withMyPaperLayer';
import withIndent from '../hoc/withIndent/withIndent';

import Loader from '../Loader/Loader';
import Title from '../Title/Title';


const About = props => (
  <>
    {  props.about.isLoading ?
      withMyPaperLayer(
        withIndent([
          <Loader />,
        ])) :

      withMyPaperLayer(
        withIndent([
          <Title titleValue={ 'Мои репозитории:' }/>,
          <ol>
            {
              props.about.items.map(
                item => (
                  <li key={item.id}>
                    <a href={ item.html_url } target="_blank">
                      { item.name }
                    </a>
                  </li>
                )
              )
            }
          </ol>,
        ]),
      )
    }
  </>
);


export default About;
