import Loader from '../Loader/Loader';
import Title from '../Title/Title';


const About = props => (
  props.about.isLoading ?
    <Loader /> :
    <>
      <Title
        titleValue={
          props.about.fetchReposFailure ? 'Ошибка:' : 'Мои репозитории:'
        }
      />
      {props.about.fetchReposFailure ?
        <p>{ props.about.errorMessage }</p> :
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
        </ol>
      }
    </>
);


export default About;
