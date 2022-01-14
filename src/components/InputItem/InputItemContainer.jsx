import {
  connect,
} from 'react-redux';
import {
  createItem,
} from '../../store/actions/createItemAction';
import {
  useState,
} from 'react';

import {
  normalLength,
} from '../../utils/isNormalLength';

import InputItem from './InputItem';


const InputItemContainer = props => {
  const [
    inputValue,
    setInputvalue,
  ] = useState('');

  const [
    helperText,
    setHelperText,
  ] = useState(' ');

  const [
    errorStatus,
    setErrorStatus,
  ] = useState(false);

  const addErrorStatus = (text = 'Нужно заполнить поле') => {
    setErrorStatus(true);
    setHelperText(text);
  };

  const removeErrorStatus = () => {
    setErrorStatus(false);
    setHelperText(' ');
  };

  const checkElementInStore = () => props.items.some(
    element => element.value === inputValue.toUpperCase());

  const submitData = () => {
    props.createItem(inputValue.toUpperCase());
    setInputvalue('');
  };

  const onChangeTextField = event => {
    const textOnly = /^[0-9\/*\@#$%^&-+ ]/;
    const length = new RegExp(
      `[а-яА-ЯёЁa-zA-Z0-9\/*\@#$%^&-+]{${normalLength}}`);
    if (textOnly.test(event.target.value)) {
      return addErrorStatus('Должно начинаться с прописи');
    } else if (length.test(event.target.value)) {
      return addErrorStatus('Слишком длинное слово');
    }
    setInputvalue(event.target.value);
    removeErrorStatus();
  };

  const submitDataHandler = () => {
    if (inputValue && !checkElementInStore()) {
      submitData();
      removeErrorStatus();
    } else {
      addErrorStatus('Такое дело уже добавлено в список');
    }
  };

  const onKeyDownTextField = event => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      submitDataHandler();
    }
  };

  const onClickButton = () => {
    submitDataHandler();
  };

  return (
    <InputItem
      errorStatus={ errorStatus }
      helperText={ helperText }
      inputValue={ inputValue }
      onChangeTextField={ onChangeTextField }
      onKeyDownTextField={ onKeyDownTextField }
      onClickButton={ onClickButton }
    />
  );
};

export default connect(
  state => ({
    items: state.todos.items,
  }),
  {
    createItem,
  },
)(InputItemContainer);
