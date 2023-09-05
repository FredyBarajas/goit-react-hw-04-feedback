import React from 'react';
import { ButtonButton } from './StyledButton';

const Button = ({ option, onClick }) => {
  return <ButtonButton onClick={() => onClick(option)}>{option}</ButtonButton>;
};

export default Button;
