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
      selected={props.selectedIndex === props.selected}
      onClick={() => props.setSelectedIndex(props.selected)}
    >
      <ListItemText primary={props.primary} />
    </ListItem>
  </Link>
);

export default AppLink;
