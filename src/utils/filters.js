export const allFilter = item => ({
  ...item,
  filter: true,
});


export const activeFilter = item => {
  if (item.isDone) {
    return {
      ...item,
      filter: false,
    };
  } return {
    ...item,
    filter: true,
  };
};


export const completedFilter = item => {
  if (item.isDone) {
    return {
      ...item,
      filter: true,
    };
  } return {
    ...item,
    filter: false,
  };
};
