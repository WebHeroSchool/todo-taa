import styles from './MyRepos.module.css';

import Loader from '../Loader/Loader';
import Title from '../Title/Title';
import ErrorMessages from '../ErrorMessages/ErrorMessages';
import RepoItem from '../RepoItem/RepoItem';

import withMargin from '../hoc/withMargin/withMargin';
import withIndent from '../hoc/withIndent/withIndent';
import withMyPaperLayer from '../hoc/withMyPaperLayer/withMyPaperLayer';


const TitleWithMargin = props => withMargin(Title, 'medium', props);
const TitleWithIndent = props => withIndent(TitleWithMargin, props);
const ErrorMessagesWithMargin = props => withMargin(
  ErrorMessages,
  'large',
  props,
);

const RepoItemWithMyPaperLayer = props => withMyPaperLayer(RepoItem, props);

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
        <div className={ styles.reposWrapper }>
          {props.repos.items.map(
            item => (
              <RepoItemWithMyPaperLayer key={item.id} item={ item } />
            )
          )}
        </div>
      }
    </>
  );
};

export default MyRepos;
