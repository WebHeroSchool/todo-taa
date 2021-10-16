const getTodoItemsFromStorage = () => {
  const itemList = localStorage.getItem('itemList');
  if (itemList) {
    return JSON.parse(itemList);
  };

  return [];
};

export default getTodoItemsFromStorage;
