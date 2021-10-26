import styles from './RepoList.module.css';

import Loader from '../../Loader/Loader';
import RepoItem from '../RepoItem/RepoItem';

import withMyPaperLayer from '../../hoc/withMyPaperLayer/withMyPaperLayer';

const RepoItemWithMyPaperLayer = props => withMyPaperLayer(RepoItem, props);


const RepoList = props => (
  <>
    {
      props.isSubLoading ?
        <div className={ styles.loaderWrapper }>
          <Loader />
        </div> :
        props.repos.items.map(
          item => (
            <RepoItemWithMyPaperLayer key={item.id} item={ item } {...props}/>
          )
        )
    }
  </>
);


export default RepoList;
