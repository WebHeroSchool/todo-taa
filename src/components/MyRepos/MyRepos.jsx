import Loader from '../Loader/Loader';
import Title from '../Title/Title';


const MyRepos = props => (
  props.repos.isLoading ?
    <Loader /> :
    <>
      <Title variant="h2" titleValue="Репозитории на github.com" />
      {props.repos.fetchReposFailure ?
        <p>{ props.repos.errorMessage }</p> :
        <ol>
          {
            props.repos.items.map(
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


export default MyRepos;
