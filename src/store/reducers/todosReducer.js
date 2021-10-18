import {
  toTrimSpaces,
} from '../../utils/toTrimSpaces';
import getTodoItemsFromStorage from '../../utils/getTodoItemsFromStorage';

import {
  CREATE_ITEM,
} from '../actions/createItemAction';
import {
  TOGGLE_ITEM,
} from '../actions/todo/toggleItemAction';
import {
  DELETE_ITEM,
} from '../actions/deleteItemAction';
import {
  EDIT_ITEM,
} from '../actions/todo/editItemAction';
import {
  SET_ALL_FILTER,
  SET_ACTIVE_FILTER,
  SET_COMPLITED_FILTER,
  ON_CLEAR_COMPLETED,
  SET_ORDER_ITEMS,
} from '../actions/todo/setFilters';
import {
  SORT_BY,
  SET_SORT,
} from '../actions/todo/sort';


const initialState = {
  items: getTodoItemsFromStorage(),
  count: JSON.parse(localStorage.getItem('count')),
  filter: 'all',
  isSort: false,
};


export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
  case CREATE_ITEM: {
    if (action.payload) {
      const newItemList = [
        {
          value: toTrimSpaces(action.payload),
          isDone: false,
          id: Date.now(),
          filter: (state.filter === 'active' || state.filter === 'all'),
          isEditable: false,
          order: state.count,
        },
        ...getTodoItemsFromStorage(),
      ];
      const newCount = ++state.count;

      localStorage.setItem('itemList', JSON.stringify(newItemList));
      localStorage.setItem('count', JSON.stringify(newItemList.length));

      return {
        ...state,
        items: [
          ...newItemList,
        ],
        count: newCount,
      };
    }

    break;
  }


  case TOGGLE_ITEM: {
    const newItemList = state.items.map(item => {
      const newItem = {
        ...item,
      };


      if (item.id === action.payload && !item.isEditable) {
        newItem.isDone = !item.isDone;
        newItem.filter = state.filter !== 'all' ? !item.filter : true;
      }

      return newItem;
    });

    localStorage.setItem('itemList', JSON.stringify(newItemList));

    return {
      ...state,
      items: [
        ...newItemList,
      ],
    };
    break;
  }


  case DELETE_ITEM: {
    let indexForDelete = 0;
    const newItemList = state.items.filter((item, index) => {
      if (item.id === action.payload) {
        indexForDelete = -1;
      }
      item.order = index + indexForDelete;

      return item.id !== action.payload;
    });

    const newCount = --state.count;

    localStorage.setItem('itemList', JSON.stringify(newItemList));
    localStorage.setItem('count', JSON.stringify(newItemList.length));

    return {
      ...state,
      items: [
        ...newItemList,
      ],
      count: newCount,
    };
    break;
  }


  case EDIT_ITEM: {
    const newItemList = state.items.map(item => {
      const newItem = {
        ...item,
      };

      if (item.id === action.payload.id) {
        newItem.value = toTrimSpaces(action.payload.value.toUpperCase());
        newItem.isEditable = !item.isEditable;
      }

      return newItem;
    });


    localStorage.setItem('itemList', JSON.stringify(newItemList));

    return {
      ...state,
      items: [
        ...newItemList,
      ],
    };

    return {
      ...state,
      items: [
        ...newItemList,
      ],
    };
    break;
  }


  case SET_ALL_FILTER: {
    const newItems = state.items.map(
      item => ({
        ...item,
        filter: true,
      })
    );
    const newFilter = action.payload;


    return {
      ...state,
      items: [
        ...newItems,
      ],
      filter: newFilter,
    };


    break;
  }


  case SET_ACTIVE_FILTER: {
    const newItems = state.items.map(
      item => {
        if (item.isDone) {
          return {
            ...item,
            filter: false,
          };
        } return {
          ...item,
          filter: true,
        };
      }
    );
    const newFilter = action.payload;


    return {
      ...state,
      items: [
        ...newItems,
      ],
      filter: newFilter,
    };


    break;
  }


  case SET_COMPLITED_FILTER: {
    const newItems = state.items.map(
      item => {
        if (item.isDone) {
          return {
            ...item,
            filter: true,
          };
        } return {
          ...item,
          filter: false,
        };
      }
    );
    const newFilter = action.payload;

    return {
      ...state,
      items: [
        ...newItems,
      ],
      filter: newFilter,
    };


    break;
  }


  case ON_CLEAR_COMPLETED: {
    let indexCount = 0;
    const newItemList = state.items.filter(
      item => {
        if (!item.isDone) {
          item.order = indexCount;
          indexCount++;
        }
        return !item.isDone;
      });

    localStorage.setItem('itemList', JSON.stringify(newItemList));
    localStorage.setItem('count', JSON.stringify(newItemList.length));

    return {
      ...state,
      items: [
        ...newItemList,
      ],
      count: newItemList.length,
    };


    break;
  }


  case SET_ORDER_ITEMS: {
    const newItemList = state.items.map(item => {
      if (item.order === action.payload.orderOfDrag) {
        item.order = action.payload.orderOfCover;
      } else if (item.order < action.payload.orderOfDrag &&
        item.order >= action.payload.orderOfCover) {
        item.order++;
      } else if (item.order > action.payload.orderOfDrag &&
        item.order <= action.payload.orderOfCover) {
        item.order--;
      }

      return item;
    });

    newItemList.sort((current, next) => {
      if (current.order < next.order) {
        return 1;
      };
      if (current.order > next.order) {
        return -1;
      };
      return 0;
    });


    localStorage.setItem('itemList', JSON.stringify(newItemList));

    return {
      ...state,
      items: [
        ...newItemList,
      ],
    };

    break;
  }


  case SET_SORT: {
    const newIsSort = action.payload;

    return {
      ...state,
      isSort: newIsSort,
    };

    break;
  }


  case SORT_BY: {
    let newItemList;

    if (action.payload === 'alphabet') {
      newItemList = state.items.sort((current, next) => {
        if (current.value > next.value) {
          return 1;
        };
        if (current.value < next.value) {
          return -1;
        };
        return 0;
      });
    } else if (action.payload === 'date') {
      newItemList = state.items.sort((current, next) => {
        if (current.id > next.id) {
          return 1;
        };
        if (current.id < next.id) {
          return -1;
        };
        return 0;
      });
    } else if (action.payload === 'reverse') {
      newItemList = [
        ...state.items.reverse(),
      ];
    } else {
      newItemList = [
        ...getTodoItemsFromStorage(),
      ];
    }


    return {
      ...state,
      items: [
        ...newItemList,
      ],
    };

    break;
  }


  default:
    return {
      ...state,
    };
  };
};
