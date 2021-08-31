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
  SET_ACTIVE_FILTER,
} from '../actions/todo/setActiveFilter';
import {
  SET_COMPLITED_FILTER,
} from '../actions/todo/setComplitedFilter';
import {
  SET_ALL_FILTER,
} from '../actions/todo/setAllFilter';


const initialState = {
  items: [
    {
      value: 'Разобраться с пропсами',
      isDone: false,
      id: 1,
      isFilter: true,
    },
    {
      value: 'Сделать комит',
      isDone: true,
      id: 2,
      isFilter: true,
    },
    {
      value: 'Сдать задание на проверку',
      isDone: false,
      id: 3,
      isFilter: true,
    },
  ],
  count: 3,
  isFilter: 'all',
};


export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
  case CREATE_ITEM: {
    if (action.payload.trim()) {
      const newItemList = [
        {
          value: action.payload,
          isDone: false,
          id: Date.now(),
          isFilter: (state.isFilter === 'active' || state.isFilter === 'all'),
        },
        ...state.items,
      ];
      const newCount = ++state.count;

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

      if (item.id === action.payload) {
        newItem.isDone = !item.isDone;
        newItem.isFilter = state.isFilter !== 'all' ? !item.isFilter : true;
      }

      return newItem;
    });

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


  default:
    return {
      ...state,
    };
  };
};
