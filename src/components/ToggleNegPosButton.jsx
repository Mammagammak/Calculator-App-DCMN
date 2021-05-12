import React, { useContext } from 'react';
import { CalculationCtx } from './CalculationFunctions';

//is the number on the display is + it makes it - if negative makes it positive
const ToggleNegPosButton = () => {
  const { handleToggleSign } = useContext(CalculationCtx);

  return (
    <button type="button" onClick={ () => handleToggleSign()}>+/-</button>
  );
};

export default ToggleNegPosButton;