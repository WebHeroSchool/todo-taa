import {
  React,
  useState,
} from 'react';
import {
  MenuItem,
} from '@material-ui/core';


const MyMenuItem = ({
  value,
}) => {
  const [
    isSelected,
    setIsSelected,
  ] = useState(false);

  const toSelect = () => {
    setIsSelected(true);
  };


  return (
    <MenuItem
      selected={isSelected}
      onClick={toSelect}
    >
      {value}
    </MenuItem>
  );
};

export default MyMenuItem;
