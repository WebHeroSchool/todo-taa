import {
  connect,
} from 'react-redux';
import {
  createItem,
} from '../../store/actions/createItemAction';
import {
  useState,
} from 'react';

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

  const submitData = () => {
    props.createItem(inputValue.toUpperCase());
    setInputvalue('');
  };

  const onChangeTextField = event => {
    const textOnly = /^[0-9\/*\@#$%^&-+]/;
    const length = /[а-яА-ЯёЁa-zA-Z0-9\/*\@#$%^&-+]{20}/;
    if (textOnly.test(event.target.value)) {
      return addErrorStatus('Должно начинаться с прописи');
    } else if (length.test(event.target.value)) {
      return addErrorStatus('Слишком длинное слово');
    }
    setInputvalue(event.target.value);
    removeErrorStatus();
  };

  const onKeyDownTextField = event => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      if (inputValue) {
        submitData();
        removeErrorStatus();
      } else {
        addErrorStatus();
      }
    }
  };

  const onClickButton = () => {
    if (inputValue) {
      submitData();
    } else {
      addErrorStatus();
    }
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

export default connect(null,
  {
    createItem,
  },
)(InputItemContainer);
