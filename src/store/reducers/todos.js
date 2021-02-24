const initialState = {
  textField: {
    inputValue: '',
    errorStatus: false,
    helperText: ' ',
  },
  items: [
    {
      value: 'Разобраться с пропсами',
      isDone: false,
      id: 1,
    },
    {
      value: 'Сделать комит',
      isDone: true,
      id: 2,
    },
    {
      value: 'Сдать задание на проверку',
      isDone: false,
      id: 3,
    },
  ],
  count: 3,
};

const todos = (state = initialState, action) => {
  switch (action.type) {
  case 'CREATE_ITEM': {
    if (action.payload) {
      const newItemList = [
        {
          value: action.payload,
          isDone: false,
          id: Date.now(),
        },
        ...state.items,
      ];
      const newCount = ++state.count;

      return {
        ...state,
        textField: {
          inputValue: '',
          helperText: ' ',
        },
        items: [
          ...newItemList,
        ],
        count: newCount,
      };
      break;
    }

    return {
      ...state,
      textField: {
        errorStatus: true,
        helperText: 'Нужно заполнить поле',
      },
    };
    break;
  }


  case 'UPDATE_VALUE': {
    return {
      ...state,
      textField: {
        inputValue: action.payload,
        helperText: ' ',
      },
    };
    break;
  }


  case 'UPDATE_ITEM': {
    const newItemList = state.items.map(item => {
      const newItem = {
        ...item,
      };

      if (item.id === action.payload) {
        newItem.isDone = !item.isDone;
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


  case 'DELETE_ITEM': {
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


  default:
    return {
      ...state,
    };
  };
};

export default todos;
