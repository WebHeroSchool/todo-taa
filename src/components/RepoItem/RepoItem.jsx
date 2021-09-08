import styles from './RepoItem.module.css';
import FooterItem from './FooterItem/FooterItem';

const RepoItem = ({
  item,
}) => (
  <div className={ styles.itemWrapper }>
    <a href={ item.html_url } className={styles.repoName} target="blank">
      { item.name }
    </a>
    <div className={ styles.footer }>
      {item.language ? <FooterItem
        type="language"
        value={ item.language
        } /> : false}
      {item.stargazers_count ? <FooterItem
        type="star"
        value={ item.stargazers_count
        } /> : false}
    </div>
  </div>
);


export default RepoItem;
