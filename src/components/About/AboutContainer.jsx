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


const ContactsWithMyPaperLayer = props => withMyPaperLayer(ContactsWithIdent, {
  ...props,
});
const MyReposWithMyPaperLayer = props => withMyPaperLayer(MyReposWithIdent, {
  ...props,
});


const AboutContainer = () => (
  <>
    <ContactsWithMyPaperLayer />
    <br />
    <MyReposWithMyPaperLayer />
  </>
);


export default AboutContainer;
