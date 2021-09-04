import Loader from '../Loader/Loader';
import Title from '../Title/Title';
import EmptyRepos from './EmptyRepos/EmptyRepos';


const MyRepos = props => {
  console.log(props.repos.items.length);
  if (props.repos.isLoading) {
    return <Loader />;
  } else if (props.repos.items.length === 0) {
    return <EmptyRepos />;
  } else if (props.repos.fetchReposFailure) {
    return <p>{ props.repos.errorMessage }</p>;
  } return (
    <>
      <Title variant="h2" titleValue="Репозитории на github.com" />
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
    </>
  );
};

export default MyRepos;
