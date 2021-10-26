import Loader from '../Loader/Loader';
import Title from '../Title/Title';
import ErrorMessages from '../ErrorMessages/ErrorMessages';
import RepoList from './RepoList/RepoList';
import Pagination from './Pagination/Pagination';

import {
  useState,
} from 'react';

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
const RepoListWithScrollBar = props => withScrollBar(
  RepoList,
  props,
  props.repos.items
);


const MyRepos = props => {
  const [
    isSubLoading,
  ] = useState(true);
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
        <>
          {
            isSubLoading ? <Loader /> : <RepoListWithScrollBar {...props}/>
          }
          <Pagination
            length={ Math.ceil(
              props.contacts.items.public_repos / props.perPage) }
            setPage={ props.setPage }
          />
        </>
      }
    </>
  );
};

export default MyRepos;
