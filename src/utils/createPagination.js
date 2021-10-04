const createPagination = (length, current) => {
  const result = [];

  if (current >= 3) {
    result[0] = 1;
  }

  if (current - result[0] >= 3) {
    result[current - 2] = '...';
  }

  if (current > 1) {
    result[current - 1] = current - 1;
  }

  result[current] = current;

  if (current < length) {
    result[current + 1] = current + 1;
  }

  if (length - current >= 4) {
    result[current + 2] = '...';
  } else {
    if (current < length - 1) {
      result[current + 2] = current + 2;
    }
  }

  result[length] = length;

  return result;
};

export default createPagination;
