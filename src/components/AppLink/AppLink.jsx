import {
  Link,
} from 'react-router-dom';
import {
  ListItem,
  ListItemText,
} from '@material-ui/core';


const AppLink = props => (
  <Link className={props.className} to={props.to}>
    <ListItem
      button
      selected={props.selectedIndex === props.primary}
      onClick={() => props.setSelectedIndex(props.primary)}
    >
      <ListItemText primary={props.primary} />
    </ListItem>
  </Link>
);

export default AppLink;
