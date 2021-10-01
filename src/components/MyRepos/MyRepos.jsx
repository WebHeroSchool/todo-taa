import Loader from '../Loader/Loader';
import Title from '../Title/Title';
import ErrorMessages from '../ErrorMessages/ErrorMessages';
import RepoList from './RepoList/RepoList';
import Pagination from './Pagination/Pagination';


import withMargin from '../hoc/withMargin/withMargin';
import withIndent from '../hoc/withIndent/withIndent';
import withScrollBar from '../hoc/withScrollBar/withScrollBar';


const TitleWithMargin = props => withMargin(Title, 'medium', props);
const TitleWithIndent = props => withIndent(TitleWithMargin, props);
const ErrorMessagesWithMargin = props => withMargin(
  ErrorMessages,
  'large',
  props,
);
const RepoListWithScrollBar = props => withScrollBar(RepoList, props);


const MyRepos = props => {
  if (props.repos.isLoading) {
    return <Loader />;
  } return (
    <>
      <TitleWithIndent variant="h2" titleValue="Репозитории на github.com" />
      {props.repos.errorType ?
        <ErrorMessagesWithMargin
          errorType={props.repos.errorType}
          { ...props }
        /> :
        <RepoListWithScrollBar {...props}/>
      }
      <Pagination length="8" />
    </>
  );
};

export default MyRepos;
