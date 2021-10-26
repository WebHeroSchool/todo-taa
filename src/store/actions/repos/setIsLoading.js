export const SET_MY_REPOS_ISLOADING = 'SET_MY_REPOS_ISLOADING';
export const SET_CONTACTS_ISLOADING = 'SET_CONTACTS_ISLOADING';

export const setMyReposIsLoading = isStatus => ({
  type: SET_MY_REPOS_ISLOADING,
  payload: isStatus,
});

export const setContactsIsLoading = isStatus => ({
  type: SET_CONTACTS_ISLOADING,
  payload: isStatus,
});
