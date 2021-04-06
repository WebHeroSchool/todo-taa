export const READ_CONTACTS = 'READ_CONTACTS';

export const readContacts = contactsObject => ({
  type: READ_CONTACTS,
  payload: contactsObject,
});
