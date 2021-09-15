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
    props.createItem(inputValue);
    setInputvalue('');
  };

  const onChangeTextField = event => {
    const regexp = /^[\W0-9]/;
    if (regexp.test(event.target.value)) {
      return addErrorStatus('Должно начинаться с прописи');
    }
    setInputvalue(event.target.value.toUpperCase());
    removeErrorStatus();
  };

  const onKeyDownTextField = event => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      if (inputValue.trim()) {
        submitData();
      } else {
        addErrorStatus();
      }
    }
  };

  const onClickButton = () => {
    if (inputValue.trim()) {
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
