import styles from './RepoItem.module.css';
import FooterItem from './FooterItem/FooterItem';

const RepoItem = ({
  item,
}) => (
  <div className={ styles.itemWrapper }>
    <div className={ styles.header }>
      <a href={ item.html_url } className={ styles.repoName } target="blank">
        { item.name }
      </a>
      { item.homepage ?
        <a href={ item.homepage } className={ styles.viewDemo } target="blank">
          view demo
        </a> : false }
    </div>
    { item.description ?
      <p className={ styles.description }>
        { item.description }
      </p> : false }
    <div className={ styles.footer }>
      <span className={ styles.repoInfo }>
        {item.language ? <FooterItem
          type="language"
          value={ item.language
          } /> : false}
        {item.stargazers_count ? <FooterItem
          type="star"
          value={ item.stargazers_count
          } /> : false}
        {item.forks_count ? <FooterItem
          type="fork"
          value={ item.forks_count
          } /> : false}
      </span>
      <span className={ styles.lastUodate }>
        { item.updated_at }
      </span>
    </div>
  </div>
);


export default RepoItem;
