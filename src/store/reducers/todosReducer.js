import {
  toTrimSpaces,
} from '../../utils/toTrimSpaces';

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
        ...state.items,
        {
          value: toTrimSpaces(action.payload),
          isDone: false,
          id: Date.now(),
          isFilter: (state.isFilter === 'active' || state.isFilter === 'all'),
          isEditable: false,
          order: state.count,
        },
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


  case SET_ORDER_ITEMS: {
    const newItemList = state.items.map(item => {
      if (item.order === action.payload.orderOfDrag &&
        item.order > action.payload.orderOfCover) {
        item.order = action.payload.orderOfCover;
      } else if (item.order === action.payload.orderOfDrag &&
        item.order < action.payload.orderOfCover) {
        item.order = action.payload.orderOfCover - 1;
      } else if (action.payload.orderOfDrag > action.payload.orderOfCover &&
        item.order >= action.payload.orderOfCover &&
        item.order <= action.payload.orderOfDrag) {
        item.order++;
      } else if (action.payload.orderOfDrag < action.payload.orderOfCover &&
        item.order < action.payload.orderOfCover &&
        item.order > 0) {
        item.order--;
      }


      return item;
    });

    newItemList.sort((current, next) => {
      if (current.order > next.order) {
        return 1;
      };
      if (current.order < next.order) {
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


  default:
    return {
      ...state,
    };
  };
};
