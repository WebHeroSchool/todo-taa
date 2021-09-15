import RepoItem from '../RepoItem/RepoItem';

import withMyPaperLayer from '../../hoc/withMyPaperLayer/withMyPaperLayer';

const RepoItemWithMyPaperLayer = props => withMyPaperLayer(RepoItem, props);


const RepoList = props => (
  <>
    {props.repos.items.map(
      item => (
        <RepoItemWithMyPaperLayer key={item.id} item={ item } {...props}/>
      )
    )}
  </>
);


export default RepoList;
