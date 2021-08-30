// import {
//   Divider,
// } from '@material-ui/core';

import ContactsContainer from '../Contacts/ContactsContainer';
import MyReposContainer from '../MyRepos/MyReposContainer';

import withIndent from '../hoc/withIndent/withIndent';
import withMyPaperLayer from '../hoc/withMyPaperLayer/withMyPaperLayer';


const ContactsWithIdent = props => withIndent([
  ContactsContainer,
], {
  ...props,
});
const MyReposWithIdent = props => withIndent([
  MyReposContainer,
], {
  ...props,
});


const AboutWithIdent = props => withIndent([
  ContactsWithIdent,
  // Divider,
  MyReposWithIdent,
], {
  ...props,
});


const AboutWithMyPaperLayer = props => withMyPaperLayer(AboutWithIdent, {
  ...props,
});

const About = () => (
  <AboutWithMyPaperLayer />
);


export default About;
