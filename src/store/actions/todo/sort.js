export const FILTER = 'FILTER';


export const filterBy = by => ({
  type: FILTER,
  payload: by,
});
