import Loader from '../Loader/Loader';
import Title from '../Title/Title';
import ErrorMessages from '../ErrorMessages/ErrorMessages';
import RepoList from './RepoList/RepoList';
import Pagination from './Pagination/Pagination';


import withMargin from '../hoc/withMargin/withMargin';
import withIndent from '../hoc/withIndent/withIndent';
import withScrollBar from '../hoc/withScrollBar/withScrollBar';

import {
  useEffect,
} from 'react';


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
  useEffect(() => props.setIsSubLoading(false), [
    props.repos.items,
  ]);

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
          <RepoListWithScrollBar {...props}/>
          <Pagination
            length={ Math.ceil(
              props.contacts.items.public_repos / props.perPage) }
            setPage={ props.setPage }
            { ...props }
          />
        </>
      }
    </>
  );
};

export default MyRepos;
