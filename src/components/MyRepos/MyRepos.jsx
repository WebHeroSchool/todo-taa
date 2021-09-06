import Loader from '../Loader/Loader';
import Title from '../Title/Title';
import ErrorMessages from '../ErrorMessages/ErrorMessages';

import withMargin from '../hoc/withMargin/withMargin';
import withIndent from '../hoc/withIndent/withIndent';


const TitleWithMargin = props => withMargin(Title, 'medium', props);
const TitleWithIndent = props => withIndent(TitleWithMargin, props);
const ErrorMessagesWithMargin = props => withMargin(
  ErrorMessages,
  'large',
  props,
);

const MyRepos = props => {
  if (props.repos.isLoading) {
    return <Loader />;
  } else if (props.repos.fetchReposFailure &&
    props.repos.errorType === 'unknow') {
    return <p>{ props.repos.errorMessage }</p>;
  } return (
    <>
      <TitleWithIndent variant="h2" titleValue="Репозитории на github.com" />
      {props.repos.errorType ?
        <ErrorMessagesWithMargin
          errorType={props.repos.errorType}
        /> :
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
};

export default MyRepos;
