import {
  toTrimSpaces,
} from '../../utils/toTrimSpaces';

import {
  CREATE_ITEM,
} from '../actions/createItemAction';
import {
  UPDATE_ITEM,
} from '../actions/updateItemAction';
import {
  DELETE_ITEM,
} from '../actions/deleteItemAction';
import {
  SET_ALL_FILTER,
  SET_ACTIVE_FILTER,
  SET_COMPLITED_FILTER,
  ON_CLEAR_COMPLETED,
} from '../actions/todo/setFilters';


const initialState = {
  items: localStorage.getItem('itemList') ?
    JSON.parse(localStorage.getItem('itemList')) :
    [],
  count: JSON.parse(localStorage.getItem('count')),
  isFilter: 'all',
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
          isFilter: (state.isFilter === 'active' || state.isFilter === 'all'),
          isEditable: false,
        },
        ...state.items,
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


  case UPDATE_ITEM: {
    const newItemList = state.items.map(item => {
      const newItem = {
        ...item,
      };


      if (item.id === action.payload && !item.isEditable) {
        newItem.isDone = !item.isDone;
        newItem.isFilter = state.isFilter !== 'all' ? !item.isFilter : true;
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
    const newItemList = state.items.filter(item => item.id !== action.payload);
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


  case SET_ALL_FILTER: {
    const newItems = state.items.map(
      item => ({
        ...item,
        isFilter: true,
      })
    );
    const newIsFilter = action.payload;


    return {
      ...state,
      items: [
        ...newItems,
      ],
      isFilter: newIsFilter,
    };


    break;
  }


  case SET_ACTIVE_FILTER: {
    const newItems = state.items.map(
      item => {
        if (item.isDone) {
          return {
            ...item,
            isFilter: false,
          };
        } return {
          ...item,
          isFilter: true,
        };
      }
    );
    const newIsFilter = action.payload;


    return {
      ...state,
      items: [
        ...newItems,
      ],
      isFilter: newIsFilter,
    };


    break;
  }


  case SET_COMPLITED_FILTER: {
    const newItems = state.items.map(
      item => {
        if (item.isDone) {
          return {
            ...item,
            isFilter: true,
          };
        } return {
          ...item,
          isFilter: false,
        };
      }
    );
    const newIsFilter = action.payload;

    return {
      ...state,
      items: [
        ...newItems,
      ],
      isFilter: newIsFilter,
    };


    break;
  }


  case ON_CLEAR_COMPLETED: {
    const newItemList = state.items.filter(
      item => !item.isDone);

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


  default:
    return {
      ...state,
    };
  };
};
