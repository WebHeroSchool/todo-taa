import styles from './MyRepos.module.css';

import Loader from '../Loader/Loader';
import Title from '../Title/Title';
import ErrorMessages from '../ErrorMessages/ErrorMessages';
import RepoItem from '../RepoItem/RepoItem';

import withMargin from '../hoc/withMargin/withMargin';
import withIndent from '../hoc/withIndent/withIndent';
import withMyPaperLayer from '../hoc/withMyPaperLayer/withMyPaperLayer';

import {
  useState,
  useEffect,
} from 'react';

const TitleWithMargin = props => withMargin(Title, 'medium', props);
const TitleWithIndent = props => withIndent(TitleWithMargin, props);
const ErrorMessagesWithMargin = props => withMargin(
  ErrorMessages,
  'large',
  props,
);

const RepoItemWithMyPaperLayer = props => withMyPaperLayer(RepoItem, props);

const MyRepos = props => {
  const [
    scrollPosition,
    setScrollPosition,
  ] = useState(0);

  useEffect(
    () => {
      if (window.thumb) {
        window.thumb.style.transform =
        `translateY(${scrollPosition === 20 ?
          scrollPosition - 1 : scrollPosition}rem)`;
      }
    }, [
      scrollPosition,
    ]
  );

  const onSizeScrollMove = event => setScrollPosition(
    Math.floor(event.currentTarget.scrollTop * 100 /
    (event.currentTarget.scrollHeight - event.currentTarget.offsetHeight)) / 5
  );


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
          <div className={ styles.noScrollWrapper }
            onScroll={ onSizeScrollMove }
            onTouchEnd={ onSizeScrollMove }
          >
            {props.repos.items.map(
              item => (
                <RepoItemWithMyPaperLayer key={item.id} item={ item } />
              )
            )}
          </div>
          <div className={ styles.scrollbar }>
            <div id="thumb" className={ styles.thumb }></div>
          </div>
        </div>
      }
    </>
  );
};

export default MyRepos;
